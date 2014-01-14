function error(req, res) {
  return function () {
    res.end('no route for:' + req.url)
  }
}
var route = module.exports = function (rx, handler, _next) {
  var test = (
    'string'   === typeof rx ? new RegExp('^'+ rx)
  : 'function' === typeof rx ? {exec: rx}
  :                            rx
  )

  return function (req, res, next) {
    var m = test.exec(req.url, req.headers || {})
    if(!m) return (next || _next || error(req, res))()

    if(m[0])
      req.url = req.url.substring(m[0].length)

    req.params = [].slice.call(m, 1)
    handler(req, res, next || _next)
  }
}

;['get', 'delete', 'put', 'post'].forEach(function (method, handler) {
  var METHOD = method.toUpperCase()
  route[method] = function (rx, handler, _next) {
    var inner = route(rx, handler, _next)
    return function (req, res, next) {
      if(req.method !== METHOD) return next()
      inner(req, res, next)
    }
  }
})

