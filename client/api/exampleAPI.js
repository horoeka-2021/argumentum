import request from 'superagent'

// Example API
export function exampleAPI () {
  return request.get('/api/v1/exampleRoute')
    .then(res => {
      return res.text
    })
}
