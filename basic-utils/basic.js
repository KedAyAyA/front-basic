var typeJudge = require('./type-judge.js')

function merge() {
  let res = {}
  for (let i = 0; i < arguments.length; i++) {
    let temp = arguments[i]
    if (temp && typeof temp === 'object') {
      for (let key in temp) {
        if (temp[key] && typeof temp[key] === 'object') {
          res[key] = merge(temp[key])
        } else {
          res[key] = temp[key]
        }
      }
    }
  }
  return res
}

function forEach(val, fn) {
  if (val === null && val === undefined) {
    return
  }
  // learn from axios
  if (typeof val !== 'object') {
    val = [val]
  }

  if (typeJudge.isArray(val)) {
    for (let i = 0, l = val.length; i < l; i++) {
      fn.call(null, val[i], i, val)
    }
  } else {
    for (let key in val) {
      // 不用对象自身的是怕Object.create(null)的对象 learn from axios
      if (Object.prototype.hasOwnProperty.call(val, key)) {
        fn.call(null, val[key], key, val)
      }
    }
  }
  
}

module.exports = {
  merge,
  forEach
}