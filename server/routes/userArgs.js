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
      const argsData = { args: args }
      res.json(argsData)
      return null
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).send('USER_ARGUMENTS DATABASE ERROR: ' + err.message)
    })
})

// POST create new userArgs
router.post('/', async (req, res) => {
  const { authId, args } = req.body

  const userArgs = args.map(arg => {
    const { argId, side, story } = arg
    return {
      user_id: authId,
      arg_id: argId,
      side,
      story
    }
  })

  try {
    await db.createUserArg(userArgs)
    res.sendStatus(201)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('USER_ARGUMENTS DATABASE ERROR: ' + err.message)
  }


  // db.createUserArg(userArgs)
  //   .then(() => {
  //     res.sendStatus(201)
  //     return null
  //   })
  //   .catch(err => {
  //     console.error(err.message)
  //     res.status(500).send('USER_ARGUMENTS DATABASE ERROR: ' + err.message)
  //   })
})

// GET list of users and their userArgs
router.get('/', async (req, res) => {
  try {
    const usersList = await db.listUsers()
    const userArgsList = await db.listUserArgs()
    const swipeusers = usersList.map(user => {
      return {
        authId: user.authId,
        email: user.email,
        image: user.image,
        username: user.username,
        args: userArgsList.filter(arg => arg.userId === user.authId)
      }
    })
    res.json({ swipeusers })
    return null
  } catch (err) {
    console.error(err.message)
    res.status(500).send('USER_ARGUMENTS DATABASE ERROR: ' + err.message)
  }
})
