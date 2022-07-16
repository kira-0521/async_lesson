const sleep = (unko, seconds) => {
  setTimeout(() => {
    console.log(`${seconds++}ms`)
    unko(seconds)
  }, seconds)
}

sleep((seconds) => {
  console.log('unko')
  sleep((seconds) => {
    sleep((seconds) => {
      sleep((seconds) => {
        sleep((seconds) => {
          sleep((seconds) => {}, seconds)
        }, seconds)
      }, seconds)
    }, seconds)
  }, seconds)
}, 500)
