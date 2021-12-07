import { combineReducers } from 'redux'

import user from './user'
import profileArguments from './arguments'
import radio from './radio'
import why from './why'
import list from './list'
import users from './users'
import username from './username'
import monkey from './monkey'
import createChat from './createChat'

export default combineReducers({
  user,
  profileArguments,
  radio,
  why,
  list,
  users,
  username,
  monkey,
  createChat
})
