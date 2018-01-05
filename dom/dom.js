// 将NodeList转为数组
function convertToArray (nodeList) {
  var array = null
  try {
    // IE8-NodeList是COM对象
    array = Array.prototype.slice.call(nodeList, 0)
  } catch (err) {
    array = []
    for (var i = 0, len = nodeList.length; i < len; i++) {
      array.push(nodeList[i])
    }
  }
  return array
}

// 动态加载Script标签
function loadScript (url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}

// 兼容IE动态添加script方法
function loadScriptString (code) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  try {
    script.appendChild(document.createTextNode(code))
  } catch (e) {
    script.text = code
  }
  document.body.appendChild(script)
}