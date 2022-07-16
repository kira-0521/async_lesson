/*
  ? 「global end」が最後に表示される処理を書いてください
  */
// const sleep = async () => {
//   setTimeout(() => {
//     console.log('setTimeout done')
//   }, 1000)
// }
// const asyncFn = async () => {
//   await sleep()
//   console.log('global end')
// }
// asyncFn()

/*
  ? userId: 4に紐づく/postsの「title」を配列で出力してください。
  ! ただし、userIdは/usersへリクエストを飛ばして取得してください。
  /users: https://jsonplaceholder.typicode.com/users
  /posts: https://jsonplaceholder.typicode.com/posts
  */
const fetchUsers = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users')
  const targetUser = result.data.find((user) => user.id === 4)
  // return targetUser.id
  return targetUser.id
}

const fetchPost = async (id) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  )
  const titles = result.data.map((unko) => unko.title)
  console.log(titles)
}

const getTitles = async () => {
  const id = await fetchUsers()
  await fetchPost(id)
}
getTitles()
