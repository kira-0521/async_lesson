// async / await
const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('sleep done')
      resolve()
    }, 1000)
  })
}

const asyncFn = async () => {
  await sleep()
  await sleep()
  await sleep()
  await sleep()
}

asyncFn().then(() => {
  console.log('promise done')
})
