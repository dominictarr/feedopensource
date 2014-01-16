
module.exports = function (iterations, funders) {

  iteration.funders = funders

  var sum = funders.reduce(function (a, b) {
    return a + b.sum
  }, 0)

  var state = iteration.state = {
    funded: iteration.target < sum,
    draft: !iteration.total,
    complete: iteration.total && (iteration.total <= iteration.complete),
    progress: (iteration.complete || 0) / (iteration.total || 1)
  }
  iteration.status = (
      state.funded  && state.complete  ? 'finish'
    : state.funded  && !state.complete ? 'progress'
    : !state.funded && sum             ? 'funding'
    :                                    'ready'
  )

  return iteration
}
