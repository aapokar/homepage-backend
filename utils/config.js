require('dotenv').config()

let MONGODB_URI = process.env.MONGODB_URI
let OWM_URI = process.env.OWM_URI
let PORT = process.env.PORT
let FIREBASE_URI = process.env.FIREBASE_URI

module.exports = {
    MONGODB_URI,
    OWM_URI,
    FIREBASE_URI,
    PORT
  }