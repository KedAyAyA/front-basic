let loc = require('../location.js')
let assert = require('assert')

describe('location test', () => {
  describe('getQuerySearchArgs', () => {
    let getQuerySearchArgs = loc.getQuerySearchArgs
    global.location = {}
    it('null args', () => {
      global.location.search = ''
      let params = getQuerySearchArgs()
      assert.equal(Object.keys(params).length, 0)
    })

    it('single arg', () => {
      global.location.search = '?name=kedaya'
      let params = getQuerySearchArgs()
      assert.equal(params.name, 'kedaya')
    })

    it('args', () => {
      global.location.search = '?name=kedaya&age=18'
      let params = getQuerySearchArgs()
      assert.equal(params.name, 'kedaya')
      assert.equal(params.age, 18)
    })

    it('URLcode', () => {
      global.location.search = '?name=%E5%8F%AF%E8%BE%BE%E9%B8%AD'
      let params = getQuerySearchArgs()
      assert.equal(params.name, '可达鸭')
    })
  })
})