// Environment variables
const port = 3000

// Require express module
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
  const answer = isNaN(number) ? 'Wrong Parameter' : gaussSum(+number) // If qerystring is not number, return error msg.
  if (Object.keys(req.query).length === 0) {
    // If no input, refresh.
    res.redirect('/sum.html')
  } else {
    res.locals.number = number
    res.locals.answer = answer
    res.json(res.locals)
  }
})


// Start server
app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})