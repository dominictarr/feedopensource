# tiny-route

Tiniest routing library.

Routes on a regular expression or a string and calls a handler.
`route(rx, handler(req, res, next))`

# example

``` js
var Stack = require('stack')
var http  = require('stack')

http.createServer(Stack(
  route(/\/users/(\w+)/, function (req, res, next) {
    console.log('accessed user', req.params)
    req.end('hello', req.params[0])
    //and so on.
  }),
  route('/index.html', function (req, res) {
    res.end('<!DOCTYPE html><h1>Hello World!</h1>')
  })
))
```

## License

MIT
