const express = require('express')
const router = express.Router()


// Routes
router.get('/', (req, res) => {
  // for user's convenience
  res.redirect('/myName')
})

router.get('/myName', (req, res) => {
  const { myName } = req.cookies
  if (!myName) {
    return res.redirect('/trackName')
  }
  res.render('myName', { myName })
})

router.get('/trackName', (req, res) => {
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

router.get('/logout', (req, res) => {
  res.clearCookie('myName')
  res.redirect('/trackName')
})


module.exports = router