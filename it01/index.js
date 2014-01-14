// index.js
// by joates (14-Jan-2014)
;;

var ip = require('./fos_issueParser.js')

var arg = ''  // ['id', 'user', 'comments'] by default
ip.list(arg, function(openIssues) { console.dir(openIssues) })

