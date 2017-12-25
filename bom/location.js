// 获取url查询参数
function getQuerySearchArgs () {
  var qs = location.search.length > 0 ? location.search.substring(1) : ""
  var args = {}

  var items = qs.length ? qs.split('&') : []
  var item = null
  var name = null
  var value = null
  var i = 0
  var len = items.length
  for (i = 0; i < len; i++) {
    item = items[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    if (name.length) {
      args[name] = value
    }
  }
  return args
}

module.exports = {
  getQuerySearchArgs
}