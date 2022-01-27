// started writing this file but i think it maybe should go in the routes folder
const request = require('supertest')

const server = require('../server')

test('GET /args/ returns an object of the argument category lists', (done) => {
  request(server)
    .get('/api/v1/args')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.body).toEqual(
        expect.objectContaining({
          stupid: expect.any(Array),
          serious: expect.any(Array),
          fun: expect.any(Array)
        }))
      done()
    })
})
