/**
 * 计算一个字符串中字符的数量
 * js String是UCS-2编码的 故使用一个16bit的编码单元来表示常见字符
 * 而length返回的是字符串中编码单元的数量
 */

//  ES6
function ES6getCharCount (str) {
  return str.match(/\s|\S/gu).length
}

// Array.from method
function ES6ArrayFromCharCount (str) {
  return Array.from(str).length
}

// compatible method
function CompatibleCharCount (str) {
  var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  return str.replace(regexAstralSymbols, '_').length;
}

// convert code which over BMP
// code should be a Number > 0x10000
function CodeConvert (code) {
  let high = Math.floor((code - 0x10000) / 0x400) + 0xD800 
  let low = (code - 0x10000) % 0x400 + 0xDC00
  return String.fromCharCode(high, low)
}

module.exports = {
  ES6getCharCount,
  ES6ArrayFromCharCount,
  CompatibleCharCount,
  CodeConvert
}