const express = require('express')
const db = require('../db/arguments')

const router = express.Router()

module.exports = router

// Routes for '/api/v1/args

router.get('/', (req, res) => {
  db.listArgs()
    .then((args) => {
      const sortedArgs = {
        stupid: [],
        serious: [],
        fun: []
      }
      args.forEach(arg => {
        switch (arg.category) {
          case 'stupid':
            sortedArgs.stupid.push(arg)
            break
          case 'serious':
            sortedArgs.serious.push(arg)
            break
          case 'fun':
            sortedArgs.fun.push(arg)
            break
          default:
            console.log(`arg id:${arg.id}, category ${arg.category} not sorted`)
            break
        }
      })
      res.json(sortedArgs)
      return null
    })
    .catch((err) => {
      res.status(500).send('ARGUMENT DATABASE ERROR: ' + err.message)
    })
})
