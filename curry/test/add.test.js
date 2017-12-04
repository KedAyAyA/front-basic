let curry = require('../add.js')
let assert = require('assert')

describe('curry practice', () => {
  describe('add', () => {
    it('add(1, 2, 3) to be 6', () => {
      let res = curry.add(1, 2, 3)
      assert.equal(res, 6)
    })

    it('add(1)(2)(3)', () => {
      let res = curry.add(1)(2)(3)
      assert.equal(res, 6)
    })

    it('add(1, 2)(3)(4, 5)', () => {
      let res = curry.add(1, 2)(3)(4, 5)
      assert.equal(res, 15)
    })
  })
})