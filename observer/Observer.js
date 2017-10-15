class Observer {
    constructor(name) {
        this._name = name
    }

    update() {
        console.log(this._name)
    }
}

module.exports = Observer