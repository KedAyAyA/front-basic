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

module.exports = {
  merge
}