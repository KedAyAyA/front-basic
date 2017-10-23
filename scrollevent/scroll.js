var EventUtil = {
    addHandler: function(element, type, handler) {
        if (element.addEventListener)
            element.addEventListener(type, handler, false)
        else if (element.attachEvent) 
            element.attachEvent('on' + type, handler)
        else 
            element['on' + type] = handler
    }
}

EventUtil.addHandler(document, 'scroll', function(event) {
    // ie9+ pageYOffset ie9- ... 
    console.log(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
})