// const http = require('http')
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Game = require('./models/game')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/game', (request, response) => {
  Game.find({}).then(status => {
    console.log(status)
  })
  const id = request.body
  response.json(id)
})

app.post('/api/game', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const game = new Game({
    status: body.status
  })

  game.save().then(savedGame => {
    response.json(savedGame.toJSON())
  })
})








const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${port}`)
})