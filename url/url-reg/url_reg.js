/**
 * 2017-10-09
 * url-reg-practice
 */

// simple example
function normal() {
  var url = 'http://www.baidu.com:8080'
  var reg = /^(?:(\w+):)(?:\/\/([\w.]+):(\d+))/
  return reg.exec(url)
}

function normal2() {
  var url = 'http://www.baidu.com'
  var reg = /^(?:(\w+):)(?:\/\/([^\/#?:]+)(?::(\d+)|))/
  return reg.exec(url)
}

// some useful case
/**
 * [urlparam 选出url中各个部分的正则表达式 不存在的为undefined 存在无值的为'']
 * @return {[Array]}
 *         [
 *          0: 匹配到的全部字符串
 *          1: 协议 如:http
 *          2: 域名
 *          3: 端口号
 *          4: 关键请求路径
 *          5: url请求参数
 *          6: 锚点
 *         ]
 */
function urlparam() {
  var url = 'http://www.aspxfans.com/news/index.asp?boardID=5&ID=24618&page=1#name'
  var reg = /^(?:(\w+):)(?:\/\/([^\/#?:]+)(?::(\d+)|))([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
  return reg.exec(url)
}

/**
 * [checkCrossOrigin 检测是否是跨域]
 * @param  {[String]} localurl  [本地url 需要是完整的url]
 * @param  {[String]} targeturl [目标url 需要时完整的url]
 * @return {[Boolean]}          [true跨域 false不跨域]
 */

function checkCrossOrigin(localurl, targeturl) {
  var reg = /^(?:(\w+):)(?:\/\/([^\/#?:]+)(?::(\d+)|))/
  var localParts = reg.exec(localurl)
  var targetParts = reg.exec(targeturl)
  return (
    localParts[1] !== targetParts[1]
    || localParts[2] !== targetParts[2]
    || (localParts[3] || (localParts[1] === 'http' ? '80' : '443'))
          !== (targetParts[3] || (targetParts[1] === 'http' ? '80' : '443'))

  )
}

console.log(checkCrossOrigin('https://www.baidu.com/asd','https://www.baidu.com/ads'))
