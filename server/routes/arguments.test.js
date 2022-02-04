const request = require('supertest')
const server = require('../server')
const db = require('../db/arguments')

jest.mock('../db/arguments')

// const mockArguments = {
//   stupid: [
//     {
//       id: 5,
//       category: 'stupid',
//       name: 'Freewill',
//       description: 'Do we have it?',
//       side0: 'Yes',
//       side1: 'No'
//     },
//     {
//       id: 6,
//       category: 'stupid',
//       name: 'The nature of reality',
//       description: 'Do we live in a simulation?',
//       side0: 'Yes',
//       side1: 'No'
//     }
//   ],
//   serious: [
//     {
//       id: 1,
//       category: 'serious',
//       name: 'Aliens',
//       description: 'Do they exist?',
//       side0: 'Yes',
//       side1: 'No'
//     },
//     {
//       id: 2,
//       category: 'serious',
//       name: 'Vaccines',
//       description: 'Are they harmful?',
//       side0: 'Yes',
//       side1: 'No'
//     },
//     {
//       id: 7,
//       category: 'serious',
//       name: 'Vacine Mandates',
//       description: 'Should we have them?',
//       side0: 'For',
//       side1: 'Against'
//     }
//   ],
//   fun: [
//     {
//       id: 3,
//       category: 'fun',
//       name: 'Dogs Vs Cats',
//       description: 'Which is the best pet?',
//       side0: 'Dogs',
//       side1: 'Cats'
//     },
//     {
//       id: 4,
//       category: 'fun',
//       name: 'Batman Vs Superman',
//       description: 'Who would win in a fight?',
//       side0: 'Batman',
//       side1: 'Superman'
//     }
//   ]
// }

const mockArguments = [
  { id: 2, category: 'stupid', name: 'Are we in a simulation?', description: '', side0: 'Yes', side1: 'No' },
  { id: 1, category: 'stupid', name: 'God', description: '', side0: 'Yes', side1: 'No' },
  { id: 3, category: 'stupid', name: 'Freewill', description: '', side0: 'Yes', side1: 'No' },
  { id: 4, category: 'stupid', name: 'Left vs Right', description: '', side0: 'Left', side1: 'Right' },
  { id: 5, category: 'stupid', name: 'Life After Death', description: '', side0: 'Yes', side1: 'No' },
  { id: 7, category: 'stupid', name: 'Could AI have conciousness?', description: '', side0: 'Yes', side1: 'No' },
  { id: 201, category: 'serious', name: 'Cryptocurrencies', description: '', side0: 'For', side1: 'Against' },
  { id: 202, category: 'serious', name: 'AI', description: '', side0: 'For', side1: 'Against' },
  { id: 203, category: 'serious', name: 'Climate Change', description: '', side0: 'Yes', side1: 'No' },
  { id: 204, category: 'serious', name: 'Video Games', description: '', side0: 'For', side1: 'Against' },
  { id: 205, category: 'serious', name: 'Universal Basic Income', description: 'All people should have Universal Basic Income.', side0: 'For', side1: 'Against' },
  { id: 206, category: 'serious', name: 'Vaccines', description: 'People should be legally required to get vaccines.', side0: 'For', side1: 'Against' },
  { id: 207, category: 'serious', name: 'Mars colonisation', description: 'Humans should explore and colonise other planets.', side0: 'For', side1: 'Against' },
  { id: 208, category: 'serious', name: 'DNA Rights', description: '', side0: 'For', side1: 'Against' },
  { id: 209, category: 'serious', name: 'TRUMP', description: '', side0: 'For', side1: 'Against' },
  { id: 301, category: 'fun', name: 'Cats vs Dogs', description: '', side0: 'Cats', side1: 'Dogs' },
  { id: 302, category: 'fun', name: 'iOS vs Android', description: 'iOS or Android?', side0: 'iOS', side1: 'Android' },
  { id: 303, category: 'fun', name: 'Are bass players really better lovers?', description: '', side0: 'Yes', side1: 'No' },
  { id: 304, category: 'fun', name: 'Do students really need satellite data?', description: '', side0: 'Yes', side1: 'No' },
  { id: 305, category: 'fun', name: 'Are odd jobbers getting a fair deal?', description: '', side0: 'Yes', side1: 'No' },
  { id: 306, category: 'fun', name: 'Are dirt bikers better programmers?', description: '', side0: 'Yes', side1: 'No' },
  { id: 307, category: 'fun', name: 'Is banana really the best parameter name?', description: '', side0: 'Yes', side1: 'No' },
  { id: 308, category: 'fun', name: 'Do side scrolling games impact mental health?', description: '', side0: 'Yes', side1: 'No' },
  { id: 309, category: 'fun', name: 'Does sushi make a viable weapon?', description: '', side0: 'Yes', side1: 'No' },
  { id: 310, category: 'fun', name: 'Is programming a form of Alien torture?', description: '', side0: 'Yes', side1: 'No' }
]

describe('GET /api/v1/args', () => {
  it('gets all arguments sorted by category', () => {
    db.listArgs.mockImplementation(() => {
      return Promise.resolve(mockArguments)
    })
    return request(server)
      .get('/api/v1/args')
      .expect(200)
      .then((res) => {
      // .then((err, res) => {
        // expect(err).toBeNull()
        expect(res.body).toEqual(
          expect.objectContaining({
            stupid: expect.any(Array),
            serious: expect.any(Array),
            fun: expect.any(Array)
          }))
        expect(res.body.stupid[0].name).toBe('Are we in a simulation?')
        return null
      })
  })
})
