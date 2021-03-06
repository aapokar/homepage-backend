/*eslint no-unused-vars: ["error", { "args": "none" }]*/

const gameRouter = require('./controllers/game')
const weatherRouter = require('./controllers/weather')
const rootRouter = require('./controllers/router')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const config = require('./utils/config')

mongoose.set('useFindAndModify', false)

const url = config.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(result => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	})


app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.requestLogger)
app.use('/api/game', gameRouter)
app.use('/api/weather', weatherRouter)
app.use('*', rootRouter)

app.use(middleware.unknownEndpoint)


module.exports = app