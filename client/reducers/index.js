import { combineReducers } from 'redux'

import user from './user'
import profileArguments from './arguments'
import radio from './radio'
import why from './why'
import list from './list'
import users from './users'
import { username, setUsername } from './username'
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
<<<<<<< HEAD
  monkey,
  createChat
=======
  setUsername,
  monkey
>>>>>>> 18fecf4889d80afc70b1c5557e14af8be5298935
})
