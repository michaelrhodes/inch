var c = ['z','o','t','h','r','v','x','s','e','n']

module.exports = numenc

function numenc (num) {
  if (num == null) return
  var s = '', i = 0
  var n = ('' + num).split('')
  while (n[i]) s += c[n[i++]]
  return s
}
