// promiseの構文
const sleep = () => {
  setLoading(true)
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      console.log('sleep done')
      resolve()
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
    setLoading(false)
    console.log('finally')
  })
