require("dotenv").config();
require('./db-utils/connect')
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const secretController = require('./controllers/secretController')
const PORT = process.env.PORT || 3001
const mongoURI = process.env.MONGO_URI 


//allows express to accept requests from the front-end app (cross-origin-request middle-ware)
app.use(cors())

// use morgan
app.use(morgan('dev'))

// use public folder for static assets
app.use(express.static('public'))

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })) // extended: false - does not allow nested objects in query strings
app.use(express.json()) // returns middleware that only parses JSON

// use method override for console logging requests
app.use(methodOverride('_method')) // allow POST, PUT and DELETE from a form


//routes requests to animal controller
app.use('/secrets', secretController)


module.exports = app.listen(PORT, () => console.log('App running on port', PORT))