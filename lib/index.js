
var get     = require('./get')
var resolve = require('url').resolve
var join    = require('path').join
var funders = require('./funders')
var iterations = require('./iterations')

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

exports.iterations = function (user, repo, cb) {
  get.all([
    ghApi('repos', user, repo, 'issues'),
    ghApi('repos', user, repo, 'collaborators'),
  ], function (err, data) {
    if(err) return cb(err)
    cb(null, iterations(data[0], data[1], user, repo))
  })
}

exports.iteration = function (user, repo, wallet, cb) {
  exports.iterations(user, repo, function (err, data) {
    if(err) return cb(err)
    for(var i in data) {
      console.log(data[i].wallet, wallet)
      if(data[i].wallet === wallet)
        return cb(null, data[i])
    }
    cb(new Error('could not find iteration'))
  })
}

if(!module.parent) {
  if(process.argv[2] === 'funders')
    exports.funders('dominictarr', 'feedopensource', '4', '1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu',
    function (err, data) {
      if(err) throw err
      console.log(JSON.stringify(data, null, 2))
      process.exit()
    })
  else
  exports.iterations('dominictarr', 'feedopensource', function (err, data) {
    if(err) throw err
    console.log(JSON.stringify(data, null, 2))
    process.exit()
  })
}
