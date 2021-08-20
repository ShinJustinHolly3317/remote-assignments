const express = require('express')
const app = express()

// Connect to DB
const mysql = require('mysql')
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'appworks-student',
  password : 'Appworks456.',
  database : 'assignment'
})

// Connect
db.connect((err) => {
  if (err) {
    throw err
  }
  console.log('Mysql connected..');
})

// Body parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json({ extended: false }))

// Cookie parser
const cookieParser = require('cookie-parser')
const { RSA_NO_PADDING } = require('constants')
app.use(cookieParser())

// Static files
app.use(express.static('public'))

// Template 
app.set('view engine', 'pug')


// Route
app.get('/', (req, res) => {
  const { username } = req.cookies
  if (username) {
    // Have cookie
    res.redirect('/welcome')
  } else {
    // No cookie
    res.render('home')
  }
})

app.get('/welcome', (req, res) => {
  const { username } = req.cookies
  if (username) {
    res.render('welcome', { username })
  } else {
    res.redirect('/')
  }
})

// Post Sign up 
app.post('/signup', (req, res) => {
  let { name, email, password } = req.body
  let verifySql = `SELECT * FROM user WHERE email = '${email}'`
  let insertSql = 'INSERT INTO user SET ?'
  const userInfo = {name, email, password}
  db.query(verifySql, (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      // Email exists
      console.log('This email exists.')
      res.json({ status: 'exist', redirectUrl: './' })
    } else {
      // Create new account
      db.query(insertSql, userInfo, (err, result) => {
        if (err) throw err
        res.cookie('username', name)
        res.json({ status: 'success', redirectUrl: '/welcome'})
      })
    }
  })
})

// Sign in 
app.post('/signin', (req, res) => {
  const { email, password } = req.body
  let sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`
  db.query(sql, (err, result) => {
    if (err) throw err
    if (result.length === 0) {
      // Cannot find match
      console.log('something wrong with email/password')
      res.json({ status: 'failed', redirectUrl: './'})
    } else {
      // Login successfully
      res.cookie('username', result[0].name)
      res.json({ status: 'success', redirectUrl: '/welcome'})
    }
  })
})

// Logout
app.get('/logout', (req, res) => {
  res.clearCookie('username')
  res.redirect('/')
})


app.listen(3000, () => {
  console.log(`This server is running on http://localhost:${3000}`)
})


