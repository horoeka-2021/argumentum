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

describe('getUserById', () => {
  it('gets the correct user by their Id', () => {
    return db.getUserById(1)
      .then(user => {
        expect(user.auth0_id).toBe('auth0|61b00fe4013f920068a29725')
        expect(user.email).toBe('tanelives@gmail.com')
        return null
      })
  })
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

describe('getUserArgs', () => {
  it('gets the correct user arguments', () => {
    return db.getUserArgs('auth0|61b00fe4013f920068a29725', testDb)
      .then(userArgs => {
        expect(userArgs[0].argId).toBe(1)
        expect(userArgs[0].name).toBe('God')
        return null
      })
  })
})

describe('createUserArgs', () => {
  it('inserts users arguments into database', () => {
    const userArgs = {
      user_id: 'auth0|61b00fe4013f920068a29725',
      arg_id: 2,
      side: '?',
      story: 'This is just stupid...'
    }
    return db.createUserArg(userArgs, testDb)
      .then(() => {
        return db.getUserArgs(userArgs.user_id, testDb)
      })
      .then(userArgs => {
        expect(userArgs[1].argId).toBe(2)
        expect(userArgs[1].name).toBe('Are we in a simulation?')
        expect(userArgs[1].side).toBe('?')
        return null
      })
  })
})

describe('listUsers', () => {
  it('lists all users', () => {
    return db.listUsers(testDb)
      .then(users => {
        expect(users[0].authId).toBe('auth0|61b00fe4013f920068a29725')
        expect(users[0].email).toBe('tanelives@gmail.com')
        return null
      })
  })
  it('lists all users including new ones', () => {
    const newUser = {
      auth0_id: 'auth0|12345',
      email: 'test@gmail.com'
    }
    return db.createUser(newUser, testDb)
      .then(() => {
        return db.listUsers(testDb)
      })
      .then((users) => {
        expect(users[1].authId).toBe(newUser.auth0_id)
        expect(users[1].email).toBe(newUser.email)
        return null
      })
  })
})
