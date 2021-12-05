import request from 'superagent'

// not finished unsure...
export default function addChatUser (user) {
  console.log('addChatUser', user)
  return request.post('/api/v1/addChatUser')
    .send(user)
    .then(res => {
      return null
    })
}
