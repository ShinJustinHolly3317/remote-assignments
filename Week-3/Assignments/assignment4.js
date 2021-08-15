// Environment variables
const port = 3000

// Require express module
const express = require('express')
const app = express()

// Require cookie-parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())


// Middelware
// Static files
app.use(express.static('public'))

// template engine
app.set('view engine', 'pug')

// body-parser
app.use(express.urlencoded({ extended: false }))




// Routes
app.get('/', (req, res) => {
  // for user's convenience
  res.redirect('/myName')
})

app.get('/myName', (req, res) => {
  const { myName } = req.cookies
  if (!myName) {
    return res.redirect('/trackName')
  }
  res.render('myName', { myName })
})

app.get('/trackName', (req, res) => {
  const { myName } = req.cookies
  const { name } = req.query
  if (!myName && !name) {
    // Submit an empty input
    return res.render('trackName')
  } else if (name) {
    // with name querystring, without cookie
    res.cookie('myName', name)   
  } 
  // with cookie, either with name querystring or not
  return res.redirect('/myName')
})

app.get('/logout', (req, res) => {
  res.clearCookie('myName')
  res.redirect('/trackName')
})


// Start server
app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})