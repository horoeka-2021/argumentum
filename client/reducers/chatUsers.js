import { POST_USER_SUCCESS } from '../actions/chatUsers'

export default function chatUsers (state = {}, action) {
  switch (action.type) {
    case POST_USER_SUCCESS:
      return action.user
    default:
      return state
  }
}
