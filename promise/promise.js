
// from https://zhuanlan.zhihu.com/p/30828196?utm_source=qq&utm_medium=social
// use case 1
function usecase1 () {
  const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
  })

  promise.then(() => {
    console.log(3)
  })
  console.log(4)
}

// output 1 2 4 3
// usecase1()
// tips: 创建promise实例是立即执行的 then是异步的

function usecase2 () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 1000)
  })
  console.log(promise)
  promise.then(() => {
    console.log(promise)
    throw new Error('error')
  }).catch(e => {
    console.log(promise, e)
  })
}
// 一旦状态改变，不能变更状态
// usecase2()

function usecase3 () {
  const promise = new Promise((resolve, reject) => {
    resolve('success1')
    reject('error')
    resolve('success2')
  })

  promise.then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

// // 一旦状态改变 就不能再发生变化 所以调用几次没关系
// usecase3()

function usecase4 () {
  Promise.resolve(1).then(res => {
    console.log(res)
    return 2
  }).catch(err => {
    return 3
  }).then(res => {
    console.log(res)
  })
}

// 1 2 链式调用 包装resolve值和返回值为promise接着调用
// usecase4()

function usecase5 () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('once')
      resolve('success')
    }, 1000)
  })
  const start = Date.now()
  promise.then(res => {
    console.log(res, Date.now() - start)
  })
  promise.then(res => {
    console.log(res, Date.now() - start)
  })
}
// 一旦状态改变都可以直接拿到值
// usecase5()

function usecase6 () {
  Promise.resolve().then(() => {
    return new Error('error!')
  }).then(res => {
    console.log('then:' + res)
  }).catch(err => {
    console.log('catch:' + err)
  })
}

// 返回错误而不是抛出错误 也相当于被resolve了
// usecase6()

function usecase7 () {
  const promise = Promise.resolve().then(() => {
    return promise
  })

  promise.catch(console.error)
} 
// 不能返回promise本身 会造成死循环
// usecase7()

function usecase8 () {
  Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log)
}
// 传入非函数值会发生数值穿透
// usecase8()

function usecase9 () {
  Promise.resolve().then(function success (res) {
    throw new Error('error')
  }, function fail (e) {
    console.error('fail:', e)
  }).catch(err => {
    console.log('fail2:', err)
  })
}
// 同级定义的错误处理函数不能处理同级抛出的错误
// usecase9()

function usecase10 () {
  process.nextTick(() => {
    console.log('nextTick')
  })
  Promise.resolve()
    .then(() => {
      console.log('then')
    })
  setImmediate(() => {
    console.log('setImmediate')
  })
  console.log('end')
}

// process.nextTick 和 promise.then 都属于 microtasks，而 setImmediate 属于 macrotasks，在事件循环的 check 阶段执行。事件循环的每个阶段（macrotasks）之间都会执行 microtasks，事件循环的开始会先执行一次 microtasks
// usecase10()