import { combineReducers } from 'redux'

// import reducers
import exampleReducer from './exampleReducer'
import loginReducer from './loginReducer'

export default combineReducers({
  exampleReducer,
  loginReducer
})
