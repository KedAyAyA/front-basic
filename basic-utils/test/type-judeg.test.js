let typeJudge = require('../type-judge.js')
let assert = require('assert')

describe('type-judge', () => {
  // 检验是否是数组
  describe('isArray()', () => {
    it('shoude be true when is Array & false when isn\'t Array', () => {
      assert.equal(true, typeJudge.isArray([]))
      assert.equal(false, typeJudge.isArray({}))
    })
  })
  
})

