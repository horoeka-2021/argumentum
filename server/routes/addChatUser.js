const express = require('express')
const request = require('superagent')

const router = express.Router()

module.exports = router

// test data (this should actually come from a user registering after auth0)
// const data = { username: 'testAPI9', secret: 'password' }

// const privateKey = process.env.CHAT_ENGINE_PRIVATE_KEY
const privateKey = 'f4a20a6a-7c23-48e6-ad03-85a48414e6df'

router.post('/', async (req, res) => {
  const data = req.body
  try {
    await request.post('https://api.chatengine.io/users/')
      .set('PRIVATE-KEY', privateKey)
      .send(data)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
