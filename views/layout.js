require('html-element')
var h = require('hyperscript')

module.exports = function (data, view) {

  return h('html',
    h('head', 
      h('link', {rel: 'stylesheet', href: '/style.css'}),
      h('title', 'feedopensource')
    ),
    h('div#content', view(data))
  ).outerHTML

}
