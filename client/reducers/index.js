import { combineReducers } from 'redux'

import user from './user'
import profileArguments from './arguments'
import radio from './radio'
import why from './why'

export default combineReducers({
  user,
  profileArguments,
  radio,
  why
})
