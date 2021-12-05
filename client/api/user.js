import request from 'superagent'

const userUrl = '/api/v1/users'

export async function addUser (user) {
  return request.post(userUrl)
    .send(user)
    .catch(logError)
}

function logError (err) {
  console.error(
    'Error consuming the API (in api/user.js):',
    err.message
  )
  throw err
}

export function getUsers () {
  console.log('getUsers api called')
  // return request.get(userUrl)
  // .catch(logError)

  return new Promise((resolve, reject) => {
    resolve(exampleUsers)
  })
}

const exampleUsers = {
  swipeusers: [
    {
      authId: 'abc123',
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'No',
          story: "Our brains are just (biological) machines. Machines don't have freewill."
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Cats',
          story: "Cats are independant badasses. You need them, they don't need you."
        }
      ]
    },
    {
      authId: 'def456',
      args: [
        {
          argId: 0,
          name: 'Freewill',
          description: 'Does it exist?',
          side: 'no',
          story: 'Denial of free will is simply an abdication of personal responsibility.'
        },
        {
          argId: 1,
          name: 'Cats vs Dogs',
          description: 'Meow or Woof?',
          side: 'Dogs',
          story: 'Dogs are loyal and affectionate animals'
        }
      ]
    }
  ]
}
