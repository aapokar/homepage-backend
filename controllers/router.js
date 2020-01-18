const rootRouter = require('express').Router()

rootRouter.get('/', (request, response) => {
    
      response.redirect("/")
    })

  module.exports = rootRouter