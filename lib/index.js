
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

var fos = exports

fos.funders = function (user, repo, issue, wallet, cb) {
  var project, wallet
  get.all([
    ghApi('repos', user, repo, 'issues', issue, 'comments'),
    bcApi('address', wallet),
  ], function (err, args) {
    if(err) return cb(err)
    cb(null, funders.apply(null, args))
  })
}

fos.iterations = function (user, repo, cb) {
  get.all([
    ghApi('repos', user, repo, 'issues'),
    ghApi('repos', user, repo, 'collaborators'),
  ], function (err, data) {
    if(err) return cb(err)
    cb(null, iterations(data[0], data[1], user, repo))
  })
}

fos.iteration = function (user, repo, wallet, cb) {
  fos.iterations(user, repo, function (err, data) {
    if(err) return cb(err)
    for(var i in data) {
      if(data[i].wallet === wallet) {
        var iteration = data[i]
        return fos.funders(user, repo, ''+iteration.number, wallet, function (err, funders) {
          iteration.funders = funders
          return cb(null, iteration)
        })
      }
    }
    cb(new Error('could not find iteration'))
  })
}

if(!module.parent) {
  var args = process.argv.slice(2)
  var method = args.shift()
  if(!fos[method]) {
    var p = console.error
    p('expected one of:', Object.keys(fos).join(', '))
    p()
    p('try:')
    p('node ./lib/index.js funders dominictarr feedopensource 4 1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu')
    p('node ./lib/index.js iterations dominictarr feedopensource')
    p('node ./lib/index.js iteration dominictarr feedopensource 1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu')
    return
  }

  fos[method].apply(null, args.concat(function (err, data) {
    if(err) throw err
    console.log(JSON.stringify(data, null, 2))
    process.exit()
  }))

//  if(type === 'funders')
//    fos.funders('dominictarr', 'feedopensource', '4', '1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu',
//      function (err, data) {
//        if(err) throw err
//        console.log(JSON.stringify(data, null, 2))
//        process.exit()
//      })
//  else if(type === 'iterations')
//    fos.iterations('dominictarr', 'feedopensource', function (err, data) {
//      if(err) throw err
//      console.log(JSON.stringify(data, null, 2))
//      process.exit()
//    })
//  else
//    fos.iteration(
//      'dominictarr',
//      'feedopensource',
//      '1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu',
//        function (err, data) {
//          if(err) throw err
//          console.log(JSON.stringify(data, null, 2))
//          process.exit()
//        })
}
