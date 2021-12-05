import { combineReducers } from 'redux'

import user from './user'
import profileArguments from './arguments'
import radio from './radio'
import why from './why'
import list from './list'
import users from './users'

export default combineReducers({
  user,
  profileArguments,
  radio,
  why,
  list,
  users
})
