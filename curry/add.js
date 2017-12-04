function add () {
  let slice = Array.prototype.slice
  let arr = [].concat(slice.call(arguments))
  function fn () {
    arr = arr.concat(slice.call(arguments))
    return fn
  }
  fn.valueOf = function () {
    return arr.reduce((sum, num) => {
      return sum + num
    }, 0)
  }
  return fn
}

module.exports = {
  add
}