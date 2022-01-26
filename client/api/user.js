import request from 'superagent'

const userUrl = '/api/v1/users'

export async function addUser (user) {
  return request.post(userUrl)
    .send(user)
    .catch(logError)
}

export function addUserArgList (list) {
  return request.post('api/v1/userArgs')
    .send(list)
    .catch(logError)
}

export function getUsers () {
  return request.get('/api/v1/userArgs')
    .then(res => {
      return res.body
    })
    .catch(logError)
}

// not used yet, gets a users profile based on users authId
export function getUserProfile (authId) {
  return request.get(`api/v1/users/${authId}`)
    .then(res => {
      return res.body
    })
    .catch(logError)
}

// not used yet, gets a users args based on users authId
export function getUserArgs (authId) {
  return request.get(`api/v1/userArgs/${authId}`)
    .then(res => {
      return res.body
    })
    .catch(logError)
}

function logError (err) {
  // eslint-disable-next-line no-console
  console.error(
    'Error consuming the API (in api/user.js):',
    err.message
  )
  throw err
}
