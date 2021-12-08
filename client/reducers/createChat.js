import { CREATE_CHAT, CREATE_CHAT_SUCCESS } from '../actions/createChat'

export default function createChat (state = {}, action) {
  switch (action.type) {
    case CREATE_CHAT:
      return {
        username: action.username
      }
    case CREATE_CHAT_SUCCESS:
      return state

    default:
      return state
  }
}
