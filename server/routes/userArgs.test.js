const request = require('supertest')
const server = require('../server')
const db = require('../db/users')

jest.mock('../db/users')

// Tests and Mocks for POST /api/v1/userArgs

// const mockPost = 1
const mockGetUserArgs = [
  {
    argId: 1,
    name: 'God',
    description: '',
    side: 'No',
    story: 'God spoke to me once and told me he was made up'
  }
]

const userArgs = {
  authId: 'auth0|61b00fe4013f920068a29725',
  args: [
    {
      argId: 3,
      side: 'Cats',
      story: 'No one ever made a musical about Dogs.'
    },
    {
      argId: 5,
      side: 'No',
      story: 'We are all meat machines.'
    }
  ]
}

const duplicateUserArgs = {
  authId: 'auth0|61b00fe4013f920068a29725',
  args: [
    {
      argId: 3,
      side: 'Cats',
      story: 'No one ever made a musical about Dogs.'
    },
    {
      argId: 5,
      side: 'No',
      story: 'We are all meat machines.'
    },
    {
      argId: 1,
      side: 'No',
      story: 'God spoke to me once and told me he was made up'
    }
  ]

}

describe('POST /api/v1/userArgs', () => {
  it('does not return an error and receives the correct response', () => {
    db.createUserArg.mockImplementation(() => {
      return Promise.resolve(1)
    })
    db.getUserArgs.mockImplementation(() => {
      return Promise.resolve(mockGetUserArgs)
    })
    return request(server)
      .post('/api/v1/userArgs')
      .set('Content-Type', 'application/json')
      .send(userArgs)
      .expect(201)
      .then(res => {
        expect(res.body).toEqual({})
        return null
      })
  })
  it('does not duplicate an argument that already exists', () => {
    // this test needs completing...
    // maybe it should mock 'createUserArg'
    // and instead should add data to test db
    // then we can check if a duplicate was made...
    db.createUserArg.mockImplementation(() => {
      return Promise.resolve(1)
    })
    db.getUserArgs.mockImplementation(() => {
      return Promise.resolve(mockGetUserArgs)
    })
    return request(server)
      .post('/api/v1/userArgs')
      .set('Content-Type', 'application/json')
      .send(duplicateUserArgs)
      .expect(201)
      .then(res => {
        expect(res.body).toEqual({})
        return null
      })
  })
})

// Tests and Mocks for GET /api/v1/userArgs/:authId

// mock for getUserArgs is the same as used in the POST test

describe('GET /api/v1/userArgs/:authId', () => {
  it('gets the correct args for a user', () => {
    db.getUserArgs.mockImplementation(() => {
      return Promise.resolve(mockGetUserArgs)
    })
    return request(server)
      .get('/api/v1/userArgs/auth0|61b00fe4013f920068a29725')
      .expect(200)
      .then(res => {
        expect(res.body.args[0].name).toBe('God')
        return null
      })
  })
  it.todo('returns an error if user does not exist')
  // it('returns an error if user does not exist', () => {
  //   return request(server)
  //     .get('/api/v1/userArgs/auth0|010101001010101')
  //     .expect(500)
  //     .then(res => {
  //       console.log(res.body.error)
  //       expect(res.body.error).toBe('User does not exist')
  //       return null
  //     })
  // })
})
