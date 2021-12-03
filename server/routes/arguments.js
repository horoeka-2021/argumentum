const express = require('express')
const db = require('../db/arguments')

const router = express.Router()

module.exports = router

// Routes for '/api/v1/arguments

router.get('/', (req, res) => {
  db.listArguments()
    .then((argumentums) => {
      res.json(argumentums)
      return null
    })
    .catch((err) => {
      res.status(500).send('ARGUMENT DATABASE ERROR: ' + err.message)
    })
})
