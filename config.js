var join = require('path').join

module.exports = require('rc')('feedopensource', {
  cert: join(process.env.HOME, '.feedopensource', 'keys', 'server-cert.pem'),
  key : join(process.env.HOME, '.feedopensource', 'keys', 'server-key.pem'),
})
