

module.exports = function (certs) {
  var c = '', list = []
  certs.split('\n').forEach(function (line) {
    c += line + '\n'
    if(/-+END CERTIFICATE-+/.test(line))
      list.push(c), c = ''
  })
  return list
}
