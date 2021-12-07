import { CREATE_CHAT } from '../actions/createChat'

export default function createChat (state = {}, action) {
  switch (action.type) {
    case CREATE_CHAT:
      return {
        username: action.username
      }
    default:
      return state
  }
}
