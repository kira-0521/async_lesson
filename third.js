const sleep = (cb, seconds) => {
  setTimeout(() => {
    console.log(`${seconds++}ms`)
    cb(seconds)
  }, seconds)
}

sleep((seconds) => {
  sleep((seconds) => {
    sleep((seconds) => {
      sleep((seconds) => {
        sleep((seconds) => {
          sleep((seconds) => {
            sleep((seconds) => {}, seconds)
          }, seconds)
        }, seconds)
      }, seconds)
    }, seconds)
  }, seconds)
}, 500)
