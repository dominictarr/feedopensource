#! /usr/bin/env node

var https       = require('https')
var http        = require('http')
var fs          = require('fs')
var join        = require('path').join

var btcprogress = require('btcprogress')
var route       = require('tiny-route')
var ecstatic    = require('ecstatic')
var stack       = require('stack')

var redirect    = require('./lib/https-redirect')
var config      = require('./config')
var api         = require('./api')
var views       = require('./views')

var badge       = require('./lib/badge').getBadge
var autoApi     = require('./lib/auto-api')

var app = stack(
  //TODO: remove
  route('/badge', btcprogress()),
  //the new badge with api
  autoApi(api, views, {png: {iteration: badge}}),
  ecstatic(join(__dirname, 'static'))
)

var secure = process.getuid() === 0

if(secure) {

  https.createServer({
    cert: fs.readFileSync(config.cert),
    key : fs.readFileSync(config.key),
    ca  : fs.readFileSync(config.ca),
  }, app).listen(443)

  http.createServer(redirect()).listen(80)

  process.on('uncaughtException', function (err) {
    console.log('*****************************')
    console.error('Error at:', new Date)
    console.error(err.stack)
    console.log('*****************************')
  })

} else {
  http.createServer(app).listen(config.port)
}
