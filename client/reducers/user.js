import { SET_USER, CLEAR_USER } from '../actions/user'

const emptyUser = {
  auth0Id: '',
  email: '',
  token: ''
}

export default function user (state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      return action.user

    case CLEAR_USER:
      return emptyUser

    default:
      return state
  }
}
