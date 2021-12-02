import { LOGIN_ACTION_SUCCESS } from '../actions/loginAction'

function loginReducer (state = [], action) {
  switch (action.type) {
    case LOGIN_ACTION_SUCCESS:
      return action.login

    default:
      return state
  }
}

export default loginReducer
