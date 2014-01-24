var join = require('path').join

var home = process.env.SUDO_USER
           ? join('/home', process.env.SUDO_USER)
           : process.env.HOME || '/root'

module.exports = require('rc')('feedopensource', {
  cert: join(home, '.feedopensource', 'server-cert.pem'),
  key : join(home, '.feedopensource', 'server-key.pem'),
  port: 8000, //development (non-secure) port
  host: "feedopensource.com"
})
