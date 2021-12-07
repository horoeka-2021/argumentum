import { combineReducers } from 'redux'

import user from './user'
import profileArguments from './arguments'
import radio from './radio'
import why from './why'
import list from './list'
import users from './users'
import { username, setUsername } from './username'
import monkey from './monkey'

export default combineReducers({
  user,
  profileArguments,
  radio,
  why,
  list,
  users,
  username,
  setUsername,
  monkey
})
