#! /usr/bin/env node

var Marked = require('marked')
var highlight = require('./highlight')
var opts = require('optimist').argv
var fs = require('fs')

Marked.setOptions({
    highlight: function (code, lang) {
      if(lang == 'js') {
        return highlight(code)
      }
      return code
    }
})

function html (t) {
  if(!opts.html) return
  console.log(t)
}

var log = console.log

html('<!doctype html>')
html('  <html>')
html('  <head>')
html('   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">')
if(opts.script) {
  html('    <script>')
  log(fs.readFileSync(opts.script, 'utf8'))
  html('    </script>')
}
if(opts.css) {
  html('  <style>')
  log(fs.readFileSync(__dirname + '/styles/gh.css', 'utf8'))
  html('  </style>')
}
html('  </head>')
html('  <body>')
if(opts._.length)
  log(Marked(fs.readFileSync(opts._[0], 'utf8')))
html('</body>')
html('</html>')
