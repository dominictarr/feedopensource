#! /usr/bin/env node

var https       = require('https')
var http        = require('http')
var fs          = require('fs')
var join        = require('path').join
var btcprogress = require('btcprogress')
var route       = require('tiny-route')
var path        = require('path')
var ecstatic    = require('ecstatic')
var stack       = require('stack')
var redirect    = require('./lib/https-redirect')
var config      = require('./config')
var fos         = require('./lib')

var bar         = btcprogress()

var layout      = require('./views/layout')

var app = stack(
  route('/badge/', bar),
  route(/\/iteration\/(1[0-z]{33})/, function (req, res, next) {
    var user = 'dominictarr'
    var repo = 'feedopensource'
    fos.iteration(user, repo, req.params[0], function (err, data) {
      if(err) return next(err)
      fos.funders(user, repo, ''+data.number, req.params[0], function (err, funders) {
        if(err) return next(err)
        res.end(layout(funders, require('./views/funders')))
      })
    })
  }),
  ecstatic(path.join(__dirname, 'static'))
)

var secure = process.getuid() === 0

if(secure) {
  https.createServer({
   cert: fs.readFileSync(config.cert),
   key : fs.readFileSync(config.key)
  }, app).listen(443)

  http.createServer(redirect()).listen(80)

} else {
  http.createServer(app).listen(config.port)
}
