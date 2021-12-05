const express = require('express')
const db = require('../db/users')

const router = express.Router()

module.exports = router

// Routes for '/api/v1/users'

router.post('/', async (req, res) => {
  const newUser = req.body
  const { auth0Id, email } = newUser
  const user = {
    auth0_id: auth0Id,
    email
  }
  try {
    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('USER DATABASE ERROR: ' + err.message)
  }
})

router.get('/:authId', async (req, res) => {
  const authId = req.params.authId
  db.getUserEmail(authId)
    .then((userEmail) => {
      res.json(userEmail)
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).send('USER DATABASE ERROR: ' + err.message)
    })
})
