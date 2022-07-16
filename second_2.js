// 以下を順番に出力するには？
setTimeout(() => {
  console.log('one')
  setTimeout(() => {
    console.log('two')
    setTimeout(() => {
      console.log('three')
    }, 1000)
  }, 1000)
}, 1000)
