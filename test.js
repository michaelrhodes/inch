var test = require('tape')
var enc = require('./encode')
var dec = require('./decode')

test('it encodes', function (assert) {
  assert.equal(enc(2000), 'tzzz')
  assert.equal(enc(666), 'xxx')
  assert.equal(enc(10), 'oz')
  assert.equal(enc(5), 'v')
  assert.equal(enc(0), 'z')
  assert.equal(enc(), void 0)
  assert.end()
})

test('it decodes', function (assert) {
  assert.equal(dec('tzzz'), 2000)
  assert.equal(dec('xxx'), 666)
  assert.equal(dec('oz'), 10)
  assert.equal(dec('v'), 5)
  assert.equal(dec('z'), 0)
  assert.equal(dec(), void 0)
  assert.end()
})
