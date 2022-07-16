// thirdをpromiseで書くには
const sleep = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('sleep done')
      resolve('resolve')
      reject('reject')
    }, 1000)
  })
}

sleep()
  .then(() => {
    return sleep()
  })
  .then(() => {
    return sleep()
  })
  .then(() => {
    return sleep()
  })
  .then(() => {
    return sleep()
  })
