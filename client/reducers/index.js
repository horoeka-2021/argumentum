import { combineReducers } from 'redux'

import user from './user'
import profileArguments from './arguments'

export default combineReducers({
  user,
  profileArguments
})
