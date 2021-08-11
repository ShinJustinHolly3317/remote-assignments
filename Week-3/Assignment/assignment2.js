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
  res.send('Hello, this is assignment-1 server set up practice!')
})

app.get('/data', (req, res) => {
  const queryData = req.query
  const outputNum = isNaN(queryData.number) ? 'Wrong Parameter' : gaussSum(+queryData.number)
  if (Object.keys(queryData).length === 0) {
    res.send('Lack of Parameter')
  } else {
    res.send(`Sum of 1+2+..+N is: ${outputNum}`)
  }
  
})


// Start server
app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`);
})