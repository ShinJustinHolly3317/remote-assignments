const port = 3000
const express = require('express')
const cookieParser = require('cookie-parser')
const { render } = require('pug')
const app = express()

// Middelware
// Static files
app.use(express.static('public'))

// template engine
app.set('view engine', 'pug')

// body-parser
app.use(express.urlencoded({ extended: false }))

// cookie-parser
app.use(cookieParser())


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
  // Below condition for user manually typing in url, instead of using buttons
  if (!myName && !name) {
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
  console.log(`Local server starts on http://localhost:${port}`)
})