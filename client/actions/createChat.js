export const CREATE_CHAT = 'CREATE_CHAT'

// action creater for create chat
export function createChat (username) {
  console.log('create chat action')
  return {
    type: CREATE_CHAT,
    username
  }
}
