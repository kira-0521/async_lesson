const sleep = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('sleep done')
      reject()
    }, 1000)
  })
}

sleep()
  .then(() => {
    console.log('then')
  })
  .catch(() => {
    console.log('catch')
  })
  .finally(() => {
    console.log('finally')
  })
