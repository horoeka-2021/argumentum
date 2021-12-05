const express = require('express')
const db = require('../db/arguments')

const router = express.Router()

module.exports = router

// Routes for '/api/v1/args

router.get('/', (req, res) => {
  db.listArguments()
    .then((args) => {
      res.json(args)
      return null
    })
    .catch((err) => {
      res.status(500).send('ARGUMENT DATABASE ERROR: ' + err.message)
    })
})
