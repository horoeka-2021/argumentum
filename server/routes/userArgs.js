const express = require('express')
const db = require('../db/users')

const router = express.Router()

module.exports = router

// Routes for '/api/v1/userArgs'

// GET user /:authId args
router.get('/:authId', (req, res) => {
  const authId = req.params.authId
  db.getUserArgs(authId)
    .then((args) => {
      const argsData = {arguments: args}
      res.json(argsData)
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).send('USER DATABASE ERROR: ' + err.message)
    })
})