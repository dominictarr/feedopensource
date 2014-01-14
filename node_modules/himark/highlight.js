var tokenize = require('js-tokenizer')
//var h        = require('hyperscript')

var types = {
  punct: 'p',
  keyword: 'kd',
  name: 'nx',
  whitespace:'w',
  number:'mi',
  string1: 's1',
  string2: 's2',
  comment1: 'c',
  comment2: 'c',
}

function type(e) {
  return types[tokenize.type(e)] || ''
}

module.exports = function (code) {
  return '<span class=highlight>'+tokenize(code, true).map(function (e) {
    return '<span class='+type(e)+'>' + e + '</span>'
  }).join('')+'</span>'
}


