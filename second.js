// １秒経過後にbを実行するには
const a = () => {
  console.log('a')

  setTimeout(() => {
    console.log('１秒経過')
  }, 1000)
}

const b = () => {
  console.log('b')
}

a()
b()
