var tap = require('tap')

var addEnder = require('./')

tap.test('adds a thing', function (t) {
  t.plan(1)
  t.equal(addEnder('world wide yo'), 'world wide yo.', 'does it')
})

tap.test('doesnt add a thing', function (t) {
  t.plan(2)
  t.equal(addEnder('world is in trouble!'), 'world is in trouble!', 'does nuthin')
  t.equal(addEnder('world is in trouble?'), 'world is in trouble?', 'does nada')
})

tap.test('takes a thing', function (t) {
  t.plan(1)
  t.equal(addEnder('world domination', '?'), 'world domination?', 'does that too')
})

tap.test('takes a reginald', function (t) {
  t.plan(1)
  t.equal(addEnder('world peace 420', '!', /420/), 'world peace 420', 'does that too')
})
