import request from 'superagent'

export function getProfileArguments () {
  return request.get('/api/v1/args')
    .then(res => {
      return res.body
    })
}
