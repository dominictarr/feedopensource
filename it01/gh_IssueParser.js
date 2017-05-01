var get = require('../lib/get')
  , resolve = require('url').resolve
  , join    = require('path').join

function _getOpenIssues(_args, cb) {
  // fetches open github issues.
  var keepFields = _args.options.fields || ['title', 'number', 'user', 'body', 'comments']
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
              issues[issue.number].user = issue.user.login
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
    , keepFields = _args.options.fields || ['number', 'title', 'user', 'comments']
    , res = {}

  for (var i in issues) {

    if (issues[i].title.match(regex)) {
      var tasks = issues[i].body.match(regex_tasks)

      if (tasks != undefined) {

        for (var k in issues[i]) {
          keepFields.forEach(function(field) {
            if (issues[i].hasOwnProperty(field))
              res[field] = issues[i][field]
            else
              delete res[field]
          })
        }

        if (_args.options.percentTasksCompleted === true) {  // for example.
          var taskSum = 0
          // count related 'task' issue id(s).
          tasks.forEach(function(task) {
            var n = task.match(/[\/|#](\d+)$/)
            //console.log(n[1])
            if (n[1] != undefined) {
              if (issues.hasOwnProperty(n[1]))
                taskSum++
            }
          })

          res.tasks = tasks.length
          res.percent_completed = 100 - Math.round(100 / tasks.length * taskSum)
        }

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
    var opts = { user: options.user, repo: options.repo, options: {} }
    _getOpenIssues(opts, function(err, data) {
      if (err) cb(err)
      _getActiveIterations(options, data, cb)
    })
  }

}

module.exports = issueParser
