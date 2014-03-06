var qr = require('qr-image')

module.exports = function (data, _) {
  return qr.image(data, {type: 'png'})
}

if(!module.parent)
  module.exports(process.argv[2]).pipe(process.stdout)
