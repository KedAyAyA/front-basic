function Kdyue(options) {
    this._data = options.data
    this.$el = document.querySelector(options.el)

    // 代理数据
    Object.keys(this._data).forEach(item => {
        this._proxyData(item)
    })

    // 观察对象
    observe(this._data)

    // 编译模板
    new Compile(this._data, this.$el)
}

Kdyue.prototype._proxyData = function(key) {
    var _self = this
    Object.defineProperty(_self, key, {
        configurable: true,
        enumerable: true,
        get() {
            return _self._data[key]
        },
        set(val) {
            _self._data[key] = val
        }
    })
} 



function Observer(data) {
    this.data = data
    this.walk(data)
}

Observer.prototype.walk = function(data) {
    Object.keys(data).forEach(item => {

        this.defineReactive(data, item, data[item])
    })
}

Observer.prototype.defineReactive = function(obj, key, val) {
    var dep = new Dep()
    observe(obj[key])
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get() {
            if (Dep.target !== null) {
                dep.depend()
            }
            return val
        },
        set(newVal) {
            if (obj[key] === newVal)
                return
            val = newVal
            observe(newVal)
            dep.notify()
        }
    })
}

function observe(data) {
    if (!data || typeof data !== 'object') {
        return 
    }
    new Observer(data)
}

function Watcher(exp, cb, data) {
    this._data = data
    this.cb = cb
    this.getter = this.parseGetter(exp)
    this.get()
}

Watcher.prototype.addDep = function(dep) {
    dep.addSub(this)
}

Watcher.prototype.update = function() {
    this.cb(this.getter.call(null, this._data))
}

Watcher.prototype.get = function() {
    Dep.target = this
    var value = this.getter.call(null, this._data)
    Dep.target = null
    return value
}

Watcher.prototype.parseGetter = function(exp) {
    var reg = /\{\{\s*(.*?)\s*\}\}/
    reg.test(exp)
    var path = RegExp.$1
    var patharr = path.split(".")

    return function(obj) {
        var val = ''
        patharr.forEach(item => {
            val = obj[item]
        })
        return val
    }
}

var uid = 0

function Dep() {
    this.id = uid++
    this.subs = []
}

Dep.prototype.addSub = function(sub) {
    this.subs.push(sub)
}

Dep.prototype.remove = function(sub) {
    this.subs.splice(this.subs.indexOf(sub), 1)
}

Dep.prototype.depend = function() {
    Dep.target.addDep(this)
}

Dep.prototype.notify = function() {
    this.subs.forEach(item => {
        item.update()
    })
}

Dep.target = null

function Compile(data, el) {
    this.$el = el
    this._data = data
    this._init()
}

Compile.prototype._init = function() {
    var frag = document.createDocumentFragment(),
        child
    while (child = this.$el.firstChild) {
        frag.appendChild(child);
    }

    this.compileElemet(frag)

    this.$el.appendChild(frag)
}

Compile.prototype.compileElemet = function(el) {
    if (el.nodeType === 3) {
        var text = el.textContent
        var reg = /\{\{\s*(.*?)\s*\}\}/
        if (reg.test(text)) {
            let temp = this._getVal(RegExp.$1)
            el.textContent = temp === undefined ? el.textContent : temp
            new Watcher(RegExp.$1, function(temp) {
                el.textContent = temp === undefined ? el.textContent : temp
            }, this._data)
            
        }
    } else {
        [].slice.call(el.childNodes).forEach(item => {
            this.compileElemet(item)
        })
    }
}

Compile.prototype._getVal = function(path) {
    var arr = path.split('.')
    var val = this._data
    arr.forEach(item => {
        val = val[item]
    })

    return val
}