var get = require('../lib/get')
  , resolve = require('url').resolve
  , join    = require('path').join

function _getOpenIssues(_args, cb) {
  // fetches open github issues.
  var keepFields = _args.fields || ['id', 'user', 'comments']
    , issues = {}
    , req = resolve('https://api.github.com', join.apply(null, ['repos', _args.user, _args.repo, 'issues']))

  get(req, function(err, data) {
    if (err) return cb(err)

    data.forEach(function(issue) {
      keepFields.forEach(function(field) {
        if (issue.hasOwnProperty(field)) {

          if (issues[issue.number] === undefined)
            issues[issue.number] = {}

          if (field == 'user')
            // store the unique identifier of issue 'owner'.
            issues[issue.number].user = issue.user.id
          else
            // store any other useful properties (aka fields).
            issues[issue.number][field] = issue[field]

        }
      })
    })

    cb(null, issues)
  })
}

function _getActiveIterations() {
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

  all: function(options, cb) { _getOpenIssues(options, cb) },

  iterations: function() { _getActiveIterations() }

}

module.exports = issueParser
