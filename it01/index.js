var issues = require('./gh_IssueParser')

function cb(err, data) {
  if (err) console.error(err)
  console.dir(data)
  process.exit()
}

//var opts = { fields: ['all'] }  // default: fields: null (compact version)
//  , args = { user:'dominictarr', repo:'feedopensource', options: opts }
//, list = issues.all(args, cb)

var opts = {
      fields: ['title', 'user', 'comments'],
      percentTasksCompleted: true  // for example.
    }
  , args = { user:'dominictarr', repo:'feedopensource', options: opts }
  , work = issues.iterations(args, cb)
