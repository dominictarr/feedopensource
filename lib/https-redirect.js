module.exports = function () {
  return function (req, res, next) {
      if (!req.headers.host) {
        res.statusCode = 400
        res.end()
        return
      }
      var location = 'https://' + req.headers.host.split(':')[0] + req.url
      res.statusCode = 301
      res.setHeader('Connection', 'close')
      res.setHeader('Content-Length', '0')
      res.setHeader('Location', location)
      res.end()
    }
}
