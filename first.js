const fetchUsers = () => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(() => {
    console.log('two')
  })
}

// const matte = () => {
//   setTimeout(() => console.log('tow'), 1000)
// }

console.log('one')
fetchUsers()
// matte()
console.log('three')
