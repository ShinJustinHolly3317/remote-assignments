// Environment variables
const port = 3000

// Require express module
const express = require('express')
const app = express()

// Static files
app.use(express.static('public'))

// Require cookie-parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// template engine
app.set('view engine', 'pug')

// body-parser
app.use(express.urlencoded({ extended: false }))


// Routes
const ass1Route = require('./routes/ass1Route.js')
const ass2_3Route = require('./routes/ass2-3Route.js')
const ass4Route = require('./routes/ass4Route.js')
app.use(ass1Route)
app.use(ass2_3Route)
app.use(ass4Route)


// Handle 404 error
app.use((req, res, next) => {
  const err = new Error('I cannot find this page...')
  err.status = 404
  next(err)
})

// Error handler
app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('err')
})

// Start server
app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})
