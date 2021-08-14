const port = 3000
const express = require('express')
const app = express()

// Middelware
// Static files
app.use(express.static('public'))

// Functions
function gaussSum (num) {
  return num * (num + 1) / 2
}

// Routes
app.get('/', (req, res) => {
  // for user convenience
  res.redirect('/sum.html')
})

app.get('/data', (req, res) => {
  const { number } = req.query
  const number = req.query.number
  const answer = isNaN(number) ? 'Wrong Parameter' : gaussSum(+number)
  if (Object.keys(req.query).length === 0) {
    res.redirect('/sum.html')
  } else {
    res.locals.number = number
    res.locals.answer = answer
    res.json(res.locals)
  }
})


// Start server
app.listen(port, () => {
  console.log(`Local server starts on http://localhost:${port}`)
})