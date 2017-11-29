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

  describe('forEach', () => {
    it('forEach array check', () => {
      let a = [1, 2, 3, 4, 5]
      let af = []
      basic.forEach(a, function (value, index) {
        af.push(value + index)
      })
      assert.equal(1, af[0])
      assert.equal(3, af[1])
      assert.equal(5, af[2])
      assert.equal(7, af[3])
      assert.equal(9, af[4])
    })

    it('forEach object check', () => {
      let a = {
        foo: 'hehe',
        obj: 'hehe'
      }
      let af = {}
      basic.forEach(a, function (value, key) {
        af[key] = value + key
      })
      assert.equal('hehefoo', af.foo)
      assert.equal('heheobj', af.obj)
    })
  })

  describe('extend', () => {
    it('extend obj', () => {
      let a = {}
      let b = {
        test: '123'
      }
      basic.extend(a, b)
      assert.equal('123', a.test)
    })

    it('extend func', () => {
      let a = {}
      let b = {
        test: function () {
          return this.flag
        }
      }
      let c = {
        flag: 'test'
      }
      basic.extend(a, b, c)
      assert.equal('test', a.test())
    })
  })

})