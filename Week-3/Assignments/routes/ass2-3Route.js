const express = require('express')
const router = express.Router()


// Functions
function gaussSum (num) {
  return num * (num + 1) / 2
}

// Route
router.get('/data', (req, res) => {
  const { number } = req.query
  const outputMsg = isNaN(number) ? 'Wrong Parameter' : `Sum of 1+2+..+${number} is: ${gaussSum(+number)}`
  if (Object.keys(req.query).length === 0) {
    res.send('Lack of Parameter')
  } else {
    res.send(outputMsg)
  }
})

module.exports = router