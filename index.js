#! /usr/bin/env node

var http        = require('http')
var btcprogress = require('btcprogress')
var route       = require('tiny-route')
var path        = require('path')
var ecstatic    = require('ecstatic')
var stack       = require('stack')
var bar         = btcprogress()

var app = stack(
  route('/badge/', bar),
  ecstatic(path.join(__dirname, 'static'))
)

var port = process.getuid() === 0 ? 80 : 8000

http.createServer(app).listen(port)

