const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('sleep done')
      resolve()
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
