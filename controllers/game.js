const mongoose = require('mongoose')
const gameRouter = require('express').Router()
const Game = require('../models/game')

gameRouter.get('/', (request, response) => {
  Game.find({}).then(status => {
    // console.log(status)
    response.json(status)
  })
})

//Uusien tietojen lisääminen ei ole tarpeen
// app.post('/', (request, response, next) => {
//   const body = request.body
//   if (body.status === undefined) {
//     return response.status(400).json({ error: 'content missing' })
//   }
//   const game = new Game({
//     status: body.status
//   })
//   game.save().then(savedGame => {
//     response.json(savedGame.toJSON())
//   })
//   .catch(error => next(error))
// })

gameRouter.put('/', async (request, response, next) => {
  const id = '5e2058d149e0895ed8b46812'

  try {
    //Tilanne nyt tietokannassa
    const statusNow = await Game.findById(id)

    //Päivitetty tilanne tietokantaan 
    const newGame = {
      status: (statusNow.status >= 501) ? 1 : statusNow.status + 1
    }
    const updatedGame = await Game.findByIdAndUpdate(id, {
      $set: newGame
    }, {
      new: true,
      runValidators: true,
      context: 'query'
    })

    const currentScore = request.body.score

    if (statusNow.status % 500 === 0) {
      const prize = {
        score: currentScore + 249,
        prize: 250
      }
      response.json(prize)
    } else if (statusNow.status % 100 === 0) {
      const prize = {
        score: currentScore + 39,
        prize: 40
      }
      response.json(prize)
    } else if (statusNow.status % 10 === 0) {
      const prize = {
        score: currentScore + 4,
        prize: 5
      }
      response.json(prize)
    } else {
      const clicksUntilNextPrize = () => {
        let x = 1
        while ((statusNow.status + x) % 10 !== 0) {
          x++
        }
        return x
      }


      const eiVoittoa = {
        score: currentScore - 1,
        next: clicksUntilNextPrize()
      }
      response.json(eiVoittoa)
    }
  } catch (error) {
    next(error)
  }

})

module.exports = gameRouter