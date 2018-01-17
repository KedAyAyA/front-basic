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

// 跨浏览器获取样式表 element: link or style
function getStyleSheet (element) {
  return element.sheet || element.styleSheet
}

// 跨浏览器插入样式表
function insertRule (sheet, selectorText, cssText, position) {
  if (sheet.insertRule) {
    sheet.insertRule(selectorText + '{' + cssText + '}', position)
  } else if (sheet.addRule) {
    sheet.addRule(selectorText, cssText, position)
  }
}

// 跨浏览器删除规则
function deleteRule (sheet, index) {
  if (sheet.deleteRule) {
    sheet.deleteRule(index)
  } else if (sheet.removeRule) {
    sheet.removeRule(index)
  }
}

// 获取元素左偏移量
function getElementLeft (element) {
  var offsetLeft = element.offsetLeft
  var current = element.offsetParent
  while (current !== null) {
    offsetLeft += current.offsetLeft
    current = current.offsetParent
  }
  return offsetLeft
}

// 获取元素上偏移量
function getElementTop (element) {
  var offsetTop = element.offsetTop
  var current = element.offsetParent
  while (current !== null) {
    offsetTop += current.offsetTop
    current = current.offsetParent
  }
  return offsetTop
}