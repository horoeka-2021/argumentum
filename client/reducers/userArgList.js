import { POST_USER_ARG_LIST_SUCCESS } from '../actions/user'

// I don't think this will be used...
export default function userArgList (state = [], action) {
  switch (action.type) {
    case POST_USER_ARG_LIST_SUCCESS:
      // return action.userArgList
      return state
    default:
      return state
  }
}
