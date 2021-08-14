// Environment variables
const port = 3000

// Require express module
const express = require('express')
const app = express()

// Route
app.get('/', (req, res) => {
  res.send('Hello, this is assignment-1 server set up practice!')
})

// Start server
app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})