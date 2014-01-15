var tape = require('tape')

var funders = require('../lib/funders')

var comments = require('./fixtures/comments.json')
var wallet   = require('./fixtures/wallet.json')

//return  console.log(JSON.stringify(funders(comments, wallet), null, 2))

var expected = require('./fixtures/funders.json')


tape('find funders', function (t) {
  var actual = funders(comments, wallet)
  t.deepEqual(actual, expected)
  t.end()
})
