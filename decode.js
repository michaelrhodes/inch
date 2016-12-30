var c = ['z','o','t','h','r','v','x','s','e','n']

module.exports = numdec

function numdec (str) {
  if (str == null) return
  var ndx, s = '', i = 0
  while (str[i]) {
    ndx = c.indexOf(str[i++])
    if (!~ndx) throw new Error('invalid encoding')
    s += ndx
  }
  return +s
}
