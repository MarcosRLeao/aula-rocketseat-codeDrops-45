const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())




app.get('/', async (req, res) => {
  try {
    // response é a resposta do axios MAS eu tiro o DATA de dentro do response
    // https://api.themoviedb.org/3/movie/popular?api_key=0ea972c5b565d99ffebfdb0b9480b5fa
    // da aula: https://jsonplaceholder.typicode.com/users
    const { data } = await axios('https://api.themoviedb.org/3/movie/popular?api_key=0ea972c5b565d99ffebfdb0b9480b5fa')
    return res.json(data)
    
  } catch (error) {
      console.error(error)
  }
})





app.listen('4567')
