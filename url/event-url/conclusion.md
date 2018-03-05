- url变化总结
  1.  手动修改hash会触发popstate事件 但若hash相同不会触发hashchange事件
  2.  使用H5 history api并不能触发popstate与hashchange事件，但会在history中推入一条纪录
  3.  前进后退都会触发popstate事件 但若hash相同不会触发hashchange事件
  4.  history对象内部length会根据前进后退更新
  5.  histroy的state为h5 api设置的state