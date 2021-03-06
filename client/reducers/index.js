import { combineReducers } from 'redux'

import user from './user'
import profileArguments from './arguments'
import radio from './radio'
import why from './why'
import list from './list'
import users from './users'
import { username, setUsername } from './username'
import monkey from './monkey'
import userArgList from './userArgList'
import createChat from './createChat'
import topic from './topic'

export default combineReducers({
  user,
  profileArguments,
  radio,
  why,
  list,
  users,
  username,
  monkey,
  userArgList,
  createChat,
  setUsername,
  topic
})
