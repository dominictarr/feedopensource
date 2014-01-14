
require('html-element')
var h = require('hyperscript')


function a (href, linked) {
  return h('a', {href: href}, linked)
}

function img (src) {
  return h('img', {src: src, width: '80px'})
}

//okay, so funders object should also have data about the iteration.
//that is the wallet, the tasks, etc.
//we want to show the state at the top (fundedness, started, finished)
//which can also be represented within the progress bar.
//given that, it will be easy to generate the detailed progress bar.

module.exports = function (funders) {
  var total = 0
  return h('div',
    h('h1', 'iteration N'),
    funders.map(function (funder) {
      total += funder.sum
      if(!funder.login) return
  //      return h('h3', 'Unclaimed', funder.sum/1e8)

      /*
      +----+
      |THMB| USERNAME   0.123
      |    |
      +----+ trx,...
      */

      return h('div.row',
        h('div.span1',
          a(funder.html_url, img(funder.avatar_url || '/grumpy.jpg'))
        ),
        h('div.span4',
          h('div.uline.i4',
            h('span.i2', a(funder.html_url, funder.login)),
            h('span.i2', funder.sum/1e8)
          ),
          h('div.v1',
            funder.txs.map(function (e) {
              return h('div.sm', a('https://blockchain.info/tx/' + e.hash, e.hash.substring(0, 45)+'...'))
            })
          )
        )
      )
    }),

    h('div.row',
      h('div.span1', 'total'),
      h('div.span4.uline',
        h('span.i2', ' '),
        h('span.i2', total/1e8)
      )
    )
  )
}
