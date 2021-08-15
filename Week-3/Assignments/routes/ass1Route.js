const express = require('express')
const router = express.Router()


// Routes
router.get('/', (req, res) => {
  res.send('Hello, this is assignment-1 server set up practice!')
})


module.exports = router