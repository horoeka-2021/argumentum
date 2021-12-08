export const CREATE_CHAT = 'CREATE_CHAT'
export const CREATE_CHAT_SUCCESS = 'CREATE_CHAT_SUCCESS'
export const TOPIC = 'TOPIC'

// action creater for create chat
export function createChat (username) {
  console.log('create chat action')
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

export function setTopic (topic) {
  return {
    type: TOPIC,
    topic
  }
}
