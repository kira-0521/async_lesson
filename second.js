const sleep = (cb) => {
  setTimeout(() => {
    console.log(' one ')
    cb()
  }, 1000)
}

sleep(() => {
  console.log(' two ')
})
// console.log('three')

// 以下を順番に出力するには？
// sleep()
// sleep()
// sleep()
