const express = require('express')
const db = require('../db/users')
const log = require('../logger')

const router = express.Router()

module.exports = router

// Routes for '/api/v1/users'

// POST new user to users db
router.post('/', async (req, res) => {
  const newUser = req.body
  const { auth0Id, email, image, username } = newUser
  const user = {
    auth0_id: auth0Id,
    email,
    image,
    username
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
    log(err.message)
    res.status(500).send('USER DATABASE ERROR: ' + err.message)
  }
})

// GET user by /:authId
router.get('/:authId', (req, res) => {
  const authId = req.params.authId
  console.log('authID: ', authId)
  db.getUser(authId)
    .then((user) => {
      res.json(user)
      return null
    })
    .catch(err => {
      log(err.message)
      res.status(500).send('USER DATABASE ERROR: ' + err.message)
    })
})
