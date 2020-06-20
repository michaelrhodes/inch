var charset = require('./charset')

module.exports = decode

function decode (str) {
  var ndx, num = '', i = 0
  str = '' + str; while (str[i]) {
    ndx = charset.indexOf(str[i++])
    if (!~ndx) return null
    num += ndx
  }
  return num ? +num : null
}
