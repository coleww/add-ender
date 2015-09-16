var tap = require('tap')

var addEnder = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(addEnder('world'), 'hello world', 'does it')
})
