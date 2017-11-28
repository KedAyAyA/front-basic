let basic = require('../basic.js')
let assert = require('assert')

describe('basic-judge', () => {
  // 检验merge
  describe('merge()', () => {
    it('normal merge check', () => {
      let a = {
        foo: 'a',
        aflag: 2
      }
      let b = {
        foo: 'b',
        bflag: 3
      }
      let t = {}
      let d = basic.merge(t, a)
      assert.equal('a', d.foo)
      d = basic.merge(t, b, a)
      assert.equal('a', d.foo)
      d = basic.merge(t, a, b)
      assert.equal('b', d.foo)
      assert.equal(2, d.aflag)
      assert.equal(3, d.bflag)
    })

    it ('deep merge check', () => {
      let a = {
        obj1: {
          foo: 1
        }
      }
      let t = {}
      let d = basic.merge(t, a)
      assert.equal(1, d.obj1.foo)
      a.obj1.foo = 2
      assert.equal(1, d.obj1.foo)
    })
  })

})