var enc = require('./encode')
var dec = require('./decode')
var assert = console.assert

// Encode
assert(enc(2000) === 'wzzz')
assert(enc(666) === 'xxx')
assert(enc(10) === 'oz')
assert(enc(8) === 'g')
assert(enc(5) === 'v')
assert(enc(0) === 'z')
assert(enc() === null)
assert(enc(1.2) === null)

// Decode
assert(dec('wzzz') === 2000)
assert(dec('xxx') === 666)
assert(dec('oz') === 10)
assert(dec('g') === 8)
assert(dec('v') === 5)
assert(dec('z') === 0)
assert(dec() === null)
assert(dec('abcdef') === null)
