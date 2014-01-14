var issues = require('./gh_IssueParser')

function cb(err, data) {
  if (err) console.error(err)
  console.dir(data)
  process.exit()
}

var opts = { user:'dominictarr', repo:'feedopensource', fields: null }
  , list = issues.all(opts, cb)


