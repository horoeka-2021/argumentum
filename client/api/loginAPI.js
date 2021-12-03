import request from 'superagent'

// Login API
export function loginAPI () {
  return request.get('/api/v1/loginRoute')
    .then(res => {
      return res.text
    })
}
