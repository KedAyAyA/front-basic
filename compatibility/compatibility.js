// window position
function getWindowPosition () {
  // screenLeft/screenTop: IE Safari Opera Chrome
  // screenX/screenY: Firfox
  var leftPos = typeof window.screenLeft === 'number' ? window.screenLeft : window.screenX
  
  var topPos = typeof window.screenTop === 'number' ? window.screenTop : window.screenY

  return {
    left: leftPos,
    top: topPos
  }
}

// window viewpoint 
function getViewportSize () {
  // IE9+ 及主流浏览器
  var pageWidth = window.innerWidth
  var pageHeight = window.innerHeight

  if (typeof pageWidth !== 'number') {
    // 标准模式
    if (document.compatMode === 'CSS1Compat') {
      pageWidth = document.documentElement.clientWidth
      pageHeight = document.documentElement.clientHeight
    } else {
      pageWidth = document.body.clientWidth
      pageHeight = document.body.clientHeight
    }
  }
  return {
    height: pageHeight,
    width: pageWidth
  }
}