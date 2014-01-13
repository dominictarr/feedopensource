
var get     = require('./get')
var resolve = require('url').resolve
var join    = require('path').join
var funders = require('./funders')

function ghApi() {
  return resolve('https://api.github.com', join.apply(null, arguments))
}

function bcApi() {
  return resolve('https://blockchain.info', join.apply(null, arguments) + '?format=json')
}

exports.funders = function (user, repo, issue, wallet, cb) {
  var project, wallet
  get.all([
    ghApi('repos', user, repo, 'issues', issue, 'comments'),
    bcApi('address', wallet),
  ], function (err, args) {
    if(err) return cb(err)
    cb(null, funders.apply(null, args))
  })
  
}

if(!module.parent) {
  exports.funders('dominictarr', 'feedopensource', '4', '1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu',
  function (err, data) {
    if(err) throw err
    console.log(JSON.stringify(data, null, 2))
    process.exit()
  })
}
