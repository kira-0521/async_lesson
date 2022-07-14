const a = () => {
  console.log('a')
  setTimeout(() => {
    console.log('setTimeout done')
  }, 1000)
}

const b = () => {
  console.log('b')
}

a()
b()
