var assert = require('assert')

var route = require('../')

var called = 0

var handler = route(/^\/hello\/(\w+)/, function (req, res) {
  res.end('hello ' + req.params[0])
})

handler({url: '/hello/world'}, {end: function (data) {
  called ++
  console.log('1:', data)
  assert.equal(data, 'hello world')
}})

var handler2 = route.get(/^\/hello\/(\w+)/, function (req, res) {
  res.end('hello ' + req.params[0])
})

handler2({url: '/hello/world', method: 'GET'}, {end: function (data) {
  called ++
  console.log('2: GET', data)
  assert.equal(data, 'hello world')
}})

var handler3 = route.get('/test', function (req, res) {
  res.end('test!')
  console.log('3:', req.url)
})

handler3({url: '/test', method: 'GET'}, {end: function (data) {
  console.log(data)
  assert.equal(data, 'test!')
  called ++
}})

var handler4 = route.get(function (url, headers) {
  return headers.host === 'helloworld.com'
}, function (req, res) {
  res.end(req.headers.host)
})

handler4({
  url: '/test',
  method: 'GET',
  headers: {
    host: 'helloworld.com'
  }
}, {end: function (data) {
  console.log(data)
  assert.equal(data, 'helloworld.com')
  called ++
}})


assert.equal(called, 4)
