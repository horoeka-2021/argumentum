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
