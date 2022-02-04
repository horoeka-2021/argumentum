// SET UP: knex
const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./users')

jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('createUser', () => {
  it('creates a new user', () => {
    const newUser = {
      auth0_id: 'auth0|12345',
      email: 'test@gmail.com',
      image: '9',
      username: 'test'
    }
    return db.createUser(newUser, testDb)
      .then(user => {
        const id = user[0]
        return db.getUserById(id, testDb)
      })
      .then(user => {
        expect(user.auth0_id).toBe(newUser.auth0_id)
        expect(user.username).toBe(newUser.username)
        return null
      })
  })
})
