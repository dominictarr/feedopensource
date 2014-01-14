var get     = require('./get')
var resolve = require('url').resolve
var join    = require('path').join

var regex   = /^iteration/i  // starts with 'Iteration'

var progressbar      = /https?:\/\/feedopensource\.com\/badge\/(1[1-km-z]{33})\/(\d+(?:\.\d+))/
var issueFull        = /https?:\/\/github.com\/([0-z_]+)\/([0-z_]+)\/issues\/(\d+)/
var issueNum         = /\s#(\d+)\s/
var issueUserNum     = /\s([0-z_]+)#(\d+)\s/
var issueUserRepoNum = /\s([0-z_]+)\/([0-z_]+)#(\d+)\s/

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

    //console.log(issue.body)
    if(!m) return
    issue.wallet = m[1]
    issue.target = m[2]
    if(!wallets[issue.wallet]) {
      
      var links =
              matchAll(issueFull,        issue.body)
      .concat(matchAll(issueNum,         issue.body))
      .concat(matchAll(issueUserNum,     issue.body))
      .concat(matchAll(issueUserRepoNum, issue.body))
      .map(function (m) {
        var matches = [].slice.call(m, 1)
        var issue = matches.pop()
        var _username = matches.shift() || username
        var _repo = matches.shift() || repo
        return resolve('https://api.github.com',
          join('repos', _username, _repo, 'issues', issue))
      })

      var total = 0, complete = 0
      issue.links = links.map(function (e) {
        total ++
        if(!all[e])
          complete ++
        return {url: e, closed: !all[e]}
      })
      issue.total = total
      issue.complete = complete
      iterations.push(issue)
    }
    wallets[issue.wallet] = true
  })

  return iterations

}

