const weatherRouter = require('express').Router()
const axios =require('axios')
const config = require('../utils/config')

weatherRouter.get('/owm', async (request, response) => {
    const getWeatherFromOWM = await axios.get(config.OWM_URI)
    const res = getWeatherFromOWM.data.list[7].main.temp
    // response.send(getWeatherFromOWM)

    response.json(res)
  })

  weatherRouter.get('/firebase', async (request, response) => {
    const getWeatherFromFirebase = await axios.get(config.FIREBASE_URI)
    const dht = getWeatherFromFirebase.data.dht22
    const owm = getWeatherFromFirebase.data.owm
    // response.send(getWeatherFromOWM)

    response.json({data: [dht,owm]})
  })

  weatherRouter.get('/', async (request, response) => {

    const getWeatherFromFirebase = await axios.get(config.FIREBASE_URI)
    const dht = getWeatherFromFirebase.data.dht22
    const owm = getWeatherFromFirebase.data.owm
    const getWeatherFromOWM = await axios.get(config.OWM_URI)
    const current = getWeatherFromOWM.data.list[7].main.temp


    response.json({data: {dht:dht,owm:owm,current:current}})
  })
  

  module.exports = weatherRouter