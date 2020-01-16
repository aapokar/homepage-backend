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

app.put('/api/game', (request, response, next) => {
  const body = request.body
  const game =
      {
      number: body.name,
  }

  Name.find({}).then(res => {
    console.log('res: ', res, " game: ", game)
  })

  // Name.findByIdAndUpdate(request.params.id, {$set: game}, {new:true, runValidators: true, context: 'query'})
  //     .then(updatedName => {
  //         console.log(updatedName.toJSON())
  //         console.log(updatedName)
  //         response.json(updatedName.toJSON())
  //     })
  //     .catch(error => next(error))

})





const unknownEndpoint = (request, response) => {
  response.status(404).send({
      error: 'unknown endpoint'
  })
}
// olemattomien osoitteiden käsittely
app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${port}`)
})