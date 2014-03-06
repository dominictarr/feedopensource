
require('html-element')
var h = require('hyperscript')


function a (href, linked, classes) {
  return h('a'+(classes || ''), {href: href}, linked)
}

function img (src, width, classes) {
  return h('img'+(classes || ''), {src: src, width: width ? width+'px' : null})
}

//okay, so funders object should also have data about the iteration.
//that is the wallet, the tasks, etc.
//we want to show the state at the top (fundedness, started, finished)
//which can also be represented within the progress bar.
//given that, it will be easy to generate the detailed progress bar.

module.exports = function (iteration) {
  var total = 0
  var funders = iteration.funders
  return h('div',
    h('h1',
      a(
        iteration.html_url,
        h('span', iteration.title)
      )
    ),

    h('h3', 'Funding', iteration.state.funded ? ' (Funded)' : ''),
    h('div', img(iteration.badge_url, null, '.badge')),
    h('a',  {style: {float: 'right'}}, {href: 'bitcoin:' + iteration.wallet},
      img('/qr/' + iteration.wallet + '.png', null, '.qr'),
      iteration.wallet
    ),
//    a( + iteration.wallet, 'bitcoin: '+ iteration.wallet),

    h('h3', 'Tasks', iteration.state.complete ? '(Complete)' : ''),
    h('div',
      h('ul',
        iteration.links.map(function (l) {
          var url = l.url.replace('https://api.github.com/repos', 'https://github.com')
          return h('li', a(url, url), l.closed ? h('bold',' (DONE)') : null)
        })
      )
    ),

    h('h3', 'Funders',
        ' ('+iteration.sum.toPrecision(4) +' btc, '
        + (100*iteration.progress).toPrecision(4)
        + '% funded)'
    ),
    h('div.row',
      funders.map(function (funder) {
        total += funder.sum

        /*
        +----+
        |THMB| USERNAME   0.123
        |    |
        +----+ trx,...
        */

        return h('div.ib',
          h('div.funder',
            a(funder.html_url, img(funder.avatar_url || '/grumpy.jpg', 80), '.avatar'),
            h('div.uline.fit',
              h('span.pad10',
                h('span.i2', a(funder.html_url, funder.login)),
                h('span', funder.sum/1e8)
              )
            ),
            h('div.v1.pad10',
              funder.txs.map(function (e) {
                return h('div.sm', a('https://blockchain.info/tx/' + e.hash, e.hash.substring(0, 45)+'...'))
              })
            )
          )
        )
      })
    )
  )
}
