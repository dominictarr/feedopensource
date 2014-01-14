var join = require('path').join

var home = process.env.SUDO_USER
           ? join('/home', process.env.SUDO_USER)
           : process.env.HOME

module.exports = require('rc')('feedopensource', {
  cert: join(home, '.feedopensource', 'keys', 'server-cert.pem'),
  key : join(home, '.feedopensource', 'keys', 'server-key.pem'),
  port: 8000 //development (non-secure) port
})
