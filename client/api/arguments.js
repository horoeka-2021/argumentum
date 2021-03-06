import request from 'superagent'

export function getProfileArguments () {
  return request.get('/api/v1/args')
    .then(res => {
      return res.body
    })
    .catch(logError)
}
// not used yet, adds a new argument to db
export function addArg (arg) {
  return request.post('api/v1/arguments')
    .send(arg)
    .catch(logError)
}

function logError (err) {
  // eslint-disable-next-line no-console
  console.error(
    'Error consuming the API (in api/arguments.js):',
    err.message
  )
  throw err
}
