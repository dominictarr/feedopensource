
var issues        = require('./fixtures/issues.json')
var collaborators = require('./fixtures/collaborators')
var expected      = require('./fixtures/iterations.json')
var iterations    = require('../api/iterations')

var tape = require('tape')

tape('issues', function (t) {

  var actual = iterations(issues, collaborators, 'dominictarr', 'feedopensource')
  t.deepEqual(actual, expected)
  t.end()

})
