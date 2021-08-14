// Environment variables
const port = 3000

// Require express module
const express = require('express')
const app = express()

// Functions
function gaussSum (num) {
  return num * (num + 1) / 2
}

// Route
app.get('/', (req, res) => {
  res.redirect('/data')
})

app.get('/data', (req, res) => {
  const { number } = req.query
  const outputNum = isNaN(number) ? 'Wrong Parameter' : gaussSum(+number)
  if (Object.keys(req.query).length === 0) {
    res.send('Lack of Parameter')
  } else {
    res.send(`Sum of 1+2+..+N is: ${outputNum}`)
  }
})


// Start server
app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`);
})