var typeJudge = require('./type-judge.js')

function merge () {
  let res = {}
  function assignValue (val, key, obj) {
    if (val && typeof val === 'object') {
      res[key] = merge(val)
    } else {
      res[key] = val
    }
  }
  for (let i = 0; i < arguments.length; i++) {
    let temp = arguments[i]
    if (temp && typeof temp === 'object') {
      forEach(temp, assignValue)
    }
  }
  return res
}

function forEach (val, fn) {
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

function extend (target, source, thisArg) {
  for (let key in source) {
    if (typeof source[key] === 'function') {
      target[key] = source[key].bind(thisArg)
    } else {
      target[key] = source[key]
    }
  }
}

module.exports = {
  merge,
  forEach,
  extend
}