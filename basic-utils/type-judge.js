let toString = Object.prototype.toString

function isArray (arr) {
  return toString.call(arr) === '[object Array]'
}




module.exports = {
  isArray
}