const sleep = (cb, seconds) => {
  setTimeout(() => {
    console.log(`${seconds++}ms`)
    cb(seconds)
  }, seconds)
}

// cb地獄
sleep((seconds) => {
  sleep((seconds) => {
    sleep((seconds) => {
      sleep((seconds) => {
        sleep((seconds) => {}, seconds)
      }, seconds)
    }, seconds)
  }, seconds)
}, 500)
