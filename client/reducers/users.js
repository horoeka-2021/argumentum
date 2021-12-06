import { GET_USERS_SUCCESS } from '../actions/user'

export default function users (state = [], action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return action.users
    default:
      return state
  }
}
