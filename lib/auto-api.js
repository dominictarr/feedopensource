var parseUrl    = require('url').parse
var path        = require('path')


module.exports = function autoApi(api, views) {
  return function (req, res, next) {
    var url = parseUrl(req.url).pathname
    var ext = path.extname(url) || ''
    url = url.substring(0, url.length - ext.length)
    ext = (ext || '.html').substring(1)

    var args = url.split('/').filter(Boolean)
    var method = args.shift()

    if(!/^(html|json)$/.test(ext))             return next()
    if(!api[method])                           return next()
    if(api[method].length !== args.length + 1) return next()

    api[method].apply(null, args.concat(function (err, data) {
      if(err) return next(err)
      if(ext === 'json') res.end(JSON.stringify(data, null, 2))
      if(ext === 'html') res.end(views[method](data))
    }))
  }
}

