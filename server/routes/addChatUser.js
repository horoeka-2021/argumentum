const express = require('express')
const request = require('superagent')

const router = express.Router()

module.exports = router

const privateKey = process.env.CHAT_ENGINE_PRIVATE_KEY
console.log('privateKey', privateKey)

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
