import { combineReducers } from 'redux'

import user from './user'
import loginReducer from './loginReducer'

export default combineReducers({
  user,
  loginReducer
})
