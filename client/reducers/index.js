import { combineReducers } from 'redux'

import user from './user'
import profileArguments from './arguments'
import radio from './radio'

export default combineReducers({
  user,
  profileArguments,
  radio
})
