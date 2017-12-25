// 检查是否具有某个插件 非IE
function hasPlugin (name) {
  name = name.toLowerCase()
  for (var i = 0; i < navigator.plugins.length; i++) {
    if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
      return true
    }
  }
  return false
}

// IE
function hasIEPlugin (name) {
  try {
    new ActiveXObject(name)
    return true
  } catch {
    return false
  }
}