var enc = require('./encode')
var dec = require('./decode')
var assert = console.assert

// Encode
assert(enc(2000) === 'tzzz')
assert(enc(666) === 'xxx')
assert(enc(10) === 'oz')
assert(enc(5) === 'v')
assert(enc(0) === 'z')
assert(enc() === void 0)

// Decode
assert(dec('tzzz') === 2000)
assert(dec('xxx') === 666)
assert(dec('oz') === 10)
assert(dec('v') === 5)
assert(dec('z') === 0)
assert(dec() === void 0)
