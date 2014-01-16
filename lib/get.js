var request = require('request')

var cache = {}

var github = new RegExp('^https://api.github.com')
var blockchain = new RegExp('^https://blockchain.info')

function getRate (url) {

//  if(github.test(url))
  if(blockchain.test(url)) return 20e3 //twenty seconds


  //okay, github is a little more complicated.
  //can request 60 times an hour...
  //but if sign up 5000 times.
  //just do this for now.

  return 5e3
}

//log url without auth
function strip (url) {
  return url
    .replace(/client_id=[^&]+/, 'client_id=*****')
    .replace(/client_secret=([^&]+)/, 'client_secret=*****')
}

var get = module.exports = function (url, cb) {
  if(cache[url])
    cb(null, cache[url])

  console.error('GET', strip(url))
  request({
    url: url,
    json: true,
    headers: {'User-Agent': 'node@'+process.version}
  },
  function (err, res, json) {
    console.error(''+res.statusCode, strip(url))
    setTimeout(function () {
      delete cache[url]
    }, getRate(url))

    cb(err || (json && json.error), json)
  })
}

module.exports.all = function (ary, cb) {
  var output = [], n = 0, error
  ary.forEach(function (url, i) {
    n ++
    get(url, function (err, data) {
      if(error) return
      if(error = err) return cb(err)
      output[i] = data
      process.nextTick(next)
    })
  })

  function next () {
    if(--n) return
    cb(null, output)
  }

}
