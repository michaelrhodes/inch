var charset = require('./charset')

module.exports = encode

function encode (num) {
  var str = '', c = ('' + num).split(''), i = 0
  while (c[i]) str += charset[c[i++]]
  return str.length === c.length ? str : null
}
