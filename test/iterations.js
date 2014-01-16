
var issues        = require('./fixtures/issues.json')
var collaborators = require('./fixtures/collaborators')
var iterations    = require('../api/iterations')

var tape = require('tape')

//return console.log(JSON.stringify(iterations(issues, collaborators, 'dominictarr', 'feedopensource'), null, 2))
var expected      = require('./fixtures/iterations.json')

tape('issues', function (t) {

  var actual = iterations(issues, collaborators, 'dominictarr', 'feedopensource')
  t.deepEqual(actual, expected)
  t.end()

})
