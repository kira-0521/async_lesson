const fetchUsers = () => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(() => {
    console.log(' two ')
  })
}

console.log(' one ')
fetchUsers()
console.log(' three ')

// const sleep = () => {
//   setTimeout(() => console.log(' tow '), 1000)
// }

// console.log(' one ')
// sleep()
// console.log(' three ')
