const a = () => {
  console.log('a')

  window.setTimeout(() => {
    console.log('１秒経過')
  }, 1000)
}

const b = () => {
  console.log('b')
}

a()
b()
