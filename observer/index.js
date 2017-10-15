var Observer = require('./Observer.js')

class Event {
    constructor() {
        this._observer = []
    }

    addObserver(ob) {
        this._observer.push(ob)
    }

    removeObserver(ob) {
        var index = this._observer.indexOf(ob)
        this._observer.splice(index, 1)
    }

    notify() {
        for(let i = 0; i < this._observer.length; i++) {
            this._observer[i].update()
        }
    }
}

var o1 = new Observer('haha')
var o2 = new Observer('oo')

var event = new Event()

event.addObserver(o1)
event.notify()
event.addObserver(o2)
event.notify()