// const sleep = () => {
//   setTimeout(() => console.log(' tow '), 1000)
// }

// console.log(' one ')
// sleep()
// console.log(' three ')

const fetchUsers = () => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(() => {
    console.log('axios two ')
  })
}

console.log(' one ')
fetchUsers()
console.log(' three ')
