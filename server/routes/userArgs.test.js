// started writing this file but i think it maybe should go in the routes folder
const request = require('supertest')

const server = require('../server')

test('POST /userArgs/ does not return an error and receives the correct response', (done) => {
  request(server)
    .post('/api/v1/userArgs')
    .send({
      authId: 'abc123',
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
    })
    .set('Content-Type', 'application/json')
    .expect(201)
    .end((err, res) => {
      expect(err).toBeNull()
      done()
    })
})
