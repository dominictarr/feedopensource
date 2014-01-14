var get = require('../lib/get')
  , resolve = require('url').resolve
  , join    = require('path').join

function _getOpenIssues(_args, cb) {
  // fetches open github issues.
  var keepFields = _args.options.fields || ['id', 'user', 'comments']
    , issues = {}
    , req = resolve('https://api.github.com', join.apply(null, ['repos', _args.user, _args.repo, 'issues']))

  get(req, function(err, data) {
    if (err) return cb(err)

    data.forEach(function(issue) {

      if (keepFields.length === 1 && keepFields[0].toLowerCase() === 'all') {

        issues[issue.number] = issue

      } else {

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

      }
    })

    cb(null, issues)
  })
}

function _getActiveIterations(_args, issues, cb) {
  // parses open github issues, extracts statistics for 'iterations'.
  var regex = /^iteration/i  // starts with 'Iteration'
  //, regex = /^#/  // only issues that start with '#'
    , regex_tasks = /\*.*\r\n\s{3}.*\/\d+$|^\*.*\r\n\s{3}.*#\d+/mg
    , res = {}

  for (var i in issues) {

    if (issues[i].title.match(regex)) {
      res.id = issues[i].id
      var tasks = issues[i].body.match(regex_tasks)

      if (tasks != undefined) {
        var taskSum = 0
        // count related 'task' issue id(s).
        tasks.forEach(function(task) {
          var n = task.match(/[\/|#](\d+)$/)
          //console.log(n[1])
          if (n[1] != undefined) {
            taskSum++
          }
        })

        res.tasks = tasks.length
        res.percent_completed = 100 - Math.round(100 / tasks.length * taskSum)
      }
    }
  }

  cb(null, res)
}

issueParser = {

  all: function(options, cb) {
    _getOpenIssues(options, cb)
  },

  iterations: function(options, cb) {
    _getOpenIssues(options, function(err, data) {
      if (err) cb(err)
      _getActiveIterations(options, data, cb)
    })
  }

}

module.exports = issueParser
