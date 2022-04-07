// const fetch = require('node-fetch')
// const fs = require('fs')

//setTimeout
setTimeout(() => {
  console.log('Waited 1 second')
}, 5000)

//nested setTimeouts
setTimeout(() => {
  console.log('3')
  setTimeout(() => {
    console.log('2')
    setTimeout(() => {
      console.log(1)
    }, 1000)
  }, 1000)
}, 1000)

//button event handler in browser javascript

// error first callback
// fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
//   console.log(data)
// })

// ********* Promise *********

// Create a promise
const myPromise = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 2)
  if (rand === 0) {
    resolve()
  } else {
    reject()
  }
})

myPromise
  .then(() => console.log('Success'))
  .catch(() => console.error('Something went wrong'))

// fetch with promises
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((res) => res.json())
  .then((data) => console.log(data, `You found ${data.name}`))
  .catch((err) => console.log(err))

// fetch pokemon with async/await without error handling

const fetchPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    console.log(data, `You found ${data.name}`)
  } catch (err) {
    console.log(err, 'Please specify the pokemon')
  }
}
fetchPokemon(2)
fetchPokemon(3)
fetchPokemon(898)
