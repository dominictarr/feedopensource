
//parse comments
//pull out users and their payment transactions.

function find(txs, test) {
  for(var t in txs) {
    if(test(txs[t])) return txs[t]
  }
}

function getHash(hash) {
  return function (obj) {
    return obj.hash === hash
  }
}

module.exports = function (comments, wallet) {
  var address = wallet.address
  var users = {}
  var txs = {}
  var paid = {}
  
  comments.forEach(function (comment) {
    var name = comment.user.login
    var user = users[name] = users[name] || comment.user
    user.txs = user.txs || []
    user.sum = user.sum || 0

    var body = comment.body
    var m = /([0-f]{64})/.exec(body)
    
    var hash = m && m[1]

    if(hash) {
      console.error(hash)
      var tx = find(wallet.txs, function (tx) { return tx.hash === hash })
      tx.out.forEach(function (e) {
        if(e.addr === address) { //this transaction is into the iteration wallet.
          user.sum += e.value
          user.txs.push(tx)
          paid[hash] = true
        }
      })
    }
  })

  //remove users who commented but didn't fund anything.
  for(var user in users) {
    if(!users[user].sum)
      delete users[user]
  }

  //mark any remaining transactions as unclaimed
  var unclaimed = {}
  var sum = 0
  wallet.txs.forEach(function (tx) {
    if(!paid[tx.hash]) {
      tx.out.forEach(function (e) {
        if(e.addr === address) { //this transaction is into the iteration wallet.
          unclaimed[tx.hash] = e
          sum += e.value
        }
      })
      
    }
  })

  var ordered = []

  for(var user in users)
    ordered.push(users[user])
  ordered.push({type: 'unclaimed', from_transactions: unclaimed, sum: sum})

  ordered.sort(function (a, b) {
    return b.sum - a.sum
  })
  return ordered
}

if(!module.parent)
  console.log(module.exports(require('./comments.json'), require('./into-wallet.json')))
