import { SET_LIST } from '../actions/list'
import { FETCH_USER_ARG_LIST_SUCCESS } from '../actions/user'

function list (state = [], action) {
  switch (action.type) {
    case SET_LIST:
      return [
        ...state,
        action.list
      ]
    case FETCH_USER_ARG_LIST_SUCCESS:
      return action.userArgs.args
    default:
      return state
  }
}

export default list
