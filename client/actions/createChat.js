export const CREATE_CHAT = 'CREATE_CHAT'
export const CREATE_CHAT_SUCCESS = 'CREATE_CHAT_SUCCESS'

// action creater for create chat
export function createChat (username) {
  return {
    type: CREATE_CHAT,
    username
  }
}

export function createChatSuccess () {
  return {
    type: CREATE_CHAT_SUCCESS
  }
}
