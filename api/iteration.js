
function setStatus (iteration) {
  var state = iteration.state = {
    funded: iteration.target <= iteration.sum,
    draft: !iteration.total,
    complete: iteration.total && (iteration.total <= iteration.complete),
    progress: (iteration.complete || 0) / (iteration.total || 1)
  }
  iteration.progress = (iteration.complete || 0) / (iteration.total || 1)

  iteration.status = (
      state.funded  && state.complete  ? 'complete'
    : state.funded  && !state.complete ? 'progress'
    : !state.funded && iteration.sum   ? 'funding'
    :                                    'ready'
  )

  return iteration
}

module.exports = function (iterations, funders) {

  iteration.funders = funders
  iteration.sum = funders.reduce(function (a, b) {
    return a + b.sum
  }, 0)

  setStatus(iteration)

  return iteration
}

module.exports.random = function () {
  var target = 1 + Math.random()
  var sum = Math.min(target, target * Math.random()*1.3)
  console.log(target, sum, sum/target)
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
