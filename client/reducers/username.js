import { SET_USERNAME, CONFIRM_USERNAME } from '../actions/username'

export function username (state = '', action) {
  switch (action.type) {
    case SET_USERNAME:
      return action.username
    default:
      return state
  }
}

export function setUsername (state = '', action) {
  switch (action.type) {
    case CONFIRM_USERNAME:
      return action.set
    default:
      return state
  }
}
