function getUserAgent(userAgent) {
    var res = {
        system: '',
        version: ''
    },
    ua = userAgent || navigator.userAgent

    if (ua.indexOf('Mac') > -1 && ua.indexOf('Mobile') > -1) {
        res.system = 'IOS'
        if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
            res.version = parseFloat(RegExp.$1.replace("_", "."))
        } else {
            res.version = null
        }
    }

    if (/Android (\d+\.\d+)/.test(ua)) {
        res.system = 'android'
        res.version = parseFloat(RegExp.$1)
    }

    return res
}