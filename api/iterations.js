var resolve = require('url').resolve
var join    = require('path').join
var config  = require('../config')

var host    = config.host
var regex   = /^iteration/i  // starts with 'Iteration'

var progressbar      = new RegExp(
  "https?:\\/\\/" + host.replace(/\./, "\\.") + "\\/iteration\\/[0-z_\-]+\\/[0-z_\-]+\\/(1[1-km-z]{33}).png(?:.*)#(\\d+(?:\\.\\d+))")
var issueFull        = /https?:\/\/github.com\/([0-z_\-]+)\/([0-z_\-]+)\/issues\/(\d+)/
var issueNum         = /\s#(\d+)\s/
var issueUserNum     = /\s([0-z_-]+)#(\d+)\s/
var issueUserRepoNum = /\s([0-z_-]+)\/([0-z_-]+)#(\d+)\s/

function matchAll(r, s) {
  var matches = []
  var m
  while(m = r.exec(s)) {
    matches.push(m)
    s = s.substring(m.index + 1)
  }
  return matches
}


module.exports = function (issues, collaborators, user, repo) {

  var iterations = []
  var wallets = {}

  var names = {}

  collaborators.forEach(function (user) {
    names[user.login] = true
  })

  var all = {}
  issues.forEach(function (issue) {
    all[issue.url] = issue
  })

  issues.forEach(function (issue) {

    //if(iteration.test(issue.title))
    if(!names[issue.user.login]) return
    var m = progressbar.exec(issue.body)

    issue.owner = user
    issue.repo = repo

    //console.log(issue.body)
    if(!m) return
    issue.wallet = m[1]
    issue.target = m[2]
    issue.feedopensource_url = 'https://' + host + '/iteration/' + user + '/' + repo + '/' + m[1]
    issue.badge_url = issue.feedopensource_url + '.png#' + issue.target

    if(!wallets[issue.wallet]) {
      
      issue.links =
              matchAll(issueFull,        issue.body)
      .concat(matchAll(issueNum,         issue.body))
      .concat(matchAll(issueUserNum,     issue.body))
      .concat(matchAll(issueUserRepoNum, issue.body))
      .map(function (m) {
        var matches = [].slice.call(m, 1)
        var issue = matches.pop()
        var _username = matches.shift() || user
        var _repo = matches.shift() || repo
        return {
          html_url: m,
          url: resolve('https://api.github.com',
            join('repos', _username, _repo, 'issues', issue)),
          closed: false
        }
      })

      // check for closed issues.
      // this doesn't work if the task is in another repo.
      // (fix that later)
      var total = 0, complete = 0
      issue.links.forEach(function (e) {
        total ++
        if(!all[e.url])
          complete ++

        e.closed = !all[e.url]
      })
      issue.total = total
      issue.complete = complete
      iterations.push(issue)
    }
    wallets[issue.wallet] = true
  })

  return iterations

}

