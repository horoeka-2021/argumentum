const express = require('express')
const db = require('../db/users')

const router = express.Router()

module.exports = router

// Routes for '/api/v1/users'

// POST new user to users db
router.post('/', async (req, res) => {
  const newUser = req.body
  const { auth0Id, email } = newUser
  const user = {
    auth0_id: auth0Id,
    email
  }
  try {
    const exists = await db.userExists(user.auth0_id)
    if (!exists) {
      await db.createUser(user)
      res.sendStatus(201)
    } else {
      res.status(500).send('USER DATABASE ERROR: user already exists in db')
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send('USER DATABASE ERROR: ' + err.message)
  }
})

// GET user /:authId email
router.get('/:authId', (req, res) => {
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
