// fos_issueParser.js
// by joates (14-Jan-2014)
;;

/**
 * TODO:
 * b) build an interface to examine status of iterations.
 */

var https = require('https')
  , inBuffer = ''

function getOpenIssues(fields, json_obj) {
  // parses open github issues.
  var keepFields = fields || ['id', 'user', 'comments']
    , issues = {}

  for (var i=0, l=json_obj.length; i<l; i++) {
    for (var j=0, k=keepFields.length; j<k; j++) {
      if (json_obj[i].hasOwnProperty(keepFields[j])) {
        if (issues[json_obj[i].number] === undefined)
          issues[json_obj[i].number] = {}  // keyed by issue number.

        if (keepFields[j] == 'user') {
          // store the unique identifier of issue 'owner'.
          issues[json_obj[i].number].user = json_obj[i].user.id
        } else {
          // store any other useful properties (aka fields).
          issues[json_obj[i].number][keepFields[j]] = json_obj[i][keepFields[j]]
        }

      }
    }
  }

  return issues
}

function getActiveIterations() {
  /**
  var regex = /^iteration/i  // starts with 'Iteration'
  //, regex = /^#/  // only issues that start with '#'
    , tasks = /^\*.*\r\n\s{3}.*\/\d+$|^\*.*\r\n\s{3}.*#\d+$/mg

  if (issues[i].title.match(regex)) {
    retObj.id = issues[i].id
    retObj.tasks = issues[i].body.match(tasks)

    if (retObj.tasks != undefined) {
      // parse related issue id(s).
      for (var j=0, k=retObj.tasks.length; j<k; j++) {
        var n = retObj.tasks[j].match(/[\/|#](\d+)$/)
        //console.log(n[1])
        if (n[1] != undefined) {
        }
      }
    }
  }
  */
}

issueParser = {

  list: function(arg, cb) {

    var ret

    var reqOpts = {
      host: 'api.github.com',
      headers: {'user-agent': 'Mozilla/5.0'},
      path: '/repos/dominictarr/feedopensource/issues'
    }

    https.get(reqOpts, function(res) {

      res.on('data', function(chunk) {
        inBuffer += chunk
      })

      res.on('end', function() {
        var json = JSON.parse(inBuffer)
        cb(getOpenIssues(arg, json))
      })

    }).on('error', function(e) {
      console.error(e)
    })

  }
}

module.exports = issueParser
