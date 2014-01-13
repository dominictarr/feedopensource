
var issues = require('./fixtures/issues.json')
var collaborators = require('./fixtures/collaborators')

var iterations = require('../lib/iterations')

//var tape = require('tape')

//tape('issues', function (t) {

  console.log(iterations(issues, collaborators))

//})
