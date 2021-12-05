import { FETCH_PROFILE_ARGUMENTS_SUCCESS } from '../actions/arguments'

function products (state = [], action) {
  switch (action.type) {
    case FETCH_PROFILE_ARGUMENTS_SUCCESS:
      return action.profileArguments

    default:
      return state
  }
}

export default products
