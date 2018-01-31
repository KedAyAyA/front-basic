let assert = require('assert')
let string = require('../string.js')

describe('string test', () => {
  describe('stinrg char length', () => {
    let str = "💩 林 𠮷"
    let str2 = "💩林𠮷"
    it('str.length to be 7', () => {
      assert.equal(str.length, 7)
    })

    it('str real char to be 5', () => {
      assert.equal(string.ES6getCharCount(str), 5)
      assert.equal(string.ES6ArrayFromCharCount(str), 5)
      assert.equal(string.CompatibleCharCount(str), 5)
    })

    it('str2.length to be 3', () => {
      assert.equal(string.ES6getCharCount(str2), 3)
      assert.equal(string.ES6ArrayFromCharCount(str2), 3)
      assert.equal(string.CompatibleCharCount(str2), 3)
    })

    it('convert code > 0xffff to BMP (4bytes show a char)', () => {
      assert.equal(string.CodeConvert('💩'.codePointAt(0)), '💩')
    })
  })
})