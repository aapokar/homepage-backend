const rootRouter = require('express').Router()

rootRouter.get('/', (request, response) => {
    console.log('uudelleenohjataan')
      response.redirect("/")
    })

  module.exports = rootRouter