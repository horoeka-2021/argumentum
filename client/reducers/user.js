import { POST_USER_SUCCESS, SET_USER, CLEAR_USER } from '../actions/user'

const emptyUser = {
  auth0Id: '',
  email: '',
  token: ''
}

export default function chatUsers (state = {}, action) {
  switch (action.type) {
    case POST_USER_SUCCESS:
      return action.user

    // is this used?
    case SET_USER:
      return action.user

    // is this used?
    case CLEAR_USER:
      return emptyUser

    default:
      return state
  }
}
