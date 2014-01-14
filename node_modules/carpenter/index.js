#! /usr/bin/env node

var through = require('through')
var split   = require('split')
var cp      = require('child_process')
var duplexer = require('duplexer')

function makeInject (opts) {
  return function defaultInject (i) {
    var k = i[0]
    var r = i.substring(1).trim()
    return (
      k == '-' ? opts[r]           //parse ci option
    : k == '!' ? cp.exec(r).stdout //run program, insert stdout
    : k == '=' ? ''+eval(r)           //evaluate js
    : (function () {
        throw new Error('expected -|!|=')          
      })()
    )
  }
}

var template = module.exports = function (inject) {
  inject = (
    'function' === typeof inject 
  ? inject
  : makeInject(inject)
  )
  var buffer = []
  var I = 0
  var o = through()

  var s = split(/({{{.+?}}})/g)

  var t = through(function (l) {
    var self = this
    var m = /^{{{(.+?)}}}$/.exec(l)
    if(!m)
      return o.write(l)
    var c = inject(m[1])

    if('string' === typeof c)
      o.write(c)
    else if(c && 'function' === typeof c.pipe) {
      c.on('data', function (d) {
        o.write(d)
      })
      s.pause()
      c.on('end', function () {
        s.resume()
      })
    }
  })

  t.on('end', function () {
    o.end()
  })


  s.pipe(t)


  return duplexer(s, o)
}

if(!module.parent) {
  var opts   = require('optimist').argv
  var config = require('rc')(opts.appname || 'carpenter', {recursive: false})
  var fs     = require('fs')
  var ncp    = require('ncp')

  if(opts.r || opts.R || opts.recursive) {

    if(opts._.length < 2)
      throw new Error('expected: rtemp sourceDir targetDir')

    var sourceDir = opts._[0]
    var targetDir = opts._[1]

    ncp(sourceDir, targetDir, {
      clobber: config.clobber || false,
      transform: function (read, write) {
        read.pipe(template(makeInject(config))).pipe(write)
      }
    }, function (err) { console.error(err) })

  } else {

    var ts = template(makeInject(config))

    var sourceFile = opts._[0]
    var targetFile = opts._[1]

    var source, target

    if(!process.stdin.isTTY) {
      process.stdin.pipe(ts)
      process.stdin.nextTick(function () {
        process.stdout.resume()
      })
      if(sourceFile) targetFile = sourceFile

    } if(sourceFile)
      fs.createReadStream(sourceFile).pipe(ts)

    else if(process.stdin.isTTY)
      return fs.createReadStream(__dirname + '/usage.txt').pipe(process.stderr)

    else {
      process.stdin.pipe(ts)
      process.nextTick(function () {
        process.stdout.resume()
      })
    }

    if(targetFile) {
      ts.pipe(fs.createWriteStream(targetFile))
    } else  {
      ts.pipe(process.stdout, {end: false})
    }
  }
}
