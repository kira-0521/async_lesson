const a = (cb) => {
  console.log('a')

  window.setTimeout(() => {
    console.log('１秒待ったよ')
    cb()
  }, 1000)
}

const b = () => {
  console.log('b')
}

a(b)
