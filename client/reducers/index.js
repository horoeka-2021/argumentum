import { combineReducers } from 'redux'

import user from './user'
import exampleReducer from './exampleReducer'
import loginReducer from './loginReducer'

export default combineReducers({
  user,
  exampleReducer,
  loginReducer
})
