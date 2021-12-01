const express = require('express')

// import internal db functions
// const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  console.log('example route')
  res.send('Hello World!')
})
