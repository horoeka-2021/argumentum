import { SET_LIST } from '../actions/list'

function list (state = [], action) {
  switch (action.type) {
    case SET_LIST:
      return [
        ...state,
        action.list
      ]
    default:
      return state
  }
}

export default list
