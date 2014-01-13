// index.js
// by joates (13-Jan-2014)
;;

var https = require('https')
  , issues = ''
//, regex = /^#/  // only issues that start with '#'
  , regex = /^iteration/i  // starts with 'Iteration'
  , tasks = /https:\/\/github.com\/dominictarr\/feedopensource\/issues\/\d+$/mg

var opts = {
  host: 'api.github.com',
  headers: {'user-agent': 'Mozilla/5.0'},
  path: '/repos/dominictarr/feedopensource/issues'
}

https.get(opts, function(res) {

  res.on('data', function(data) {
    issues += data
  })

  res.on('end', function() {
    var obj = JSON.parse(issues)
    for (var i=0, l=obj.length; i<l; i++) {
      if (obj[i].title.match(regex)) {
        console.log(obj[i].body.match(tasks))
      }
    }
  })

}).on('error', function(e) {
  console.error(e)
})
