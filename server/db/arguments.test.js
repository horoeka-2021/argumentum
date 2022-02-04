// SET UP: knex
const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./arguments')

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

describe('listArgs', () => {
  it('lists all arguments', () => {
    return db.listArgs(testDb)
      .then(args => {
        expect(args[0].name).toBe('God')
        expect(args).toHaveLength(25)
        return null
      })
  })
})
