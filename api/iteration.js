
function setStatus (iteration) {
  var state = iteration.state = {
    funded: iteration.target <= iteration.sum,
    draft: !iteration.total,
    complete: iteration.total && (iteration.total <= iteration.complete),
    progress: (iteration.sum || 0) / (iteration.target || 1)
  }
  iteration.progress = (iteration.sum || 0) / (iteration.target || 1)

  iteration.status = (
      state.funded  && state.complete  ? 'complete'
    : state.funded  && !state.complete ? 'progress'
    : !state.funded && iteration.sum   ? 'funding'
    :                                    'ready'
  )

  return iteration
}

module.exports = function (iteration, funders) {
  iteration.funders = funders || []
  iteration.sum = funders.reduce(function (a, b) {
    return a + b.sum
  }, 0) / 1e8

  setStatus(iteration)

  return iteration
}

module.exports.random = function () {
  var target = 1 + (1*Math.random())
  var sum = Math.min(target, target * Math.random()*1.3)
  var total = 2 + ~~(5*Math.random())
  var complete = ~~Math.min(total, total * Math.random() * (sum < target ? 1.1 : 1.5))

  var tasks = []
  for(var i = 0; i < total; i++) {
    tasks.push({closed: complete > i})
  }

  tasks.sort(function () { return Math.random() - 0.5 })

  return setStatus({
    target   : target,
    sum      : sum,
    total    : total,
    complete : complete,
    progress : complete / total,
    status   : ['created', 'funding', 'progress', 'complete'][~~(Math.random()*4)],
    links    : tasks
  })
}
