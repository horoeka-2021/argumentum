import { EXAMPLE_ACTION_SUCCESS } from '../actions/exampleAction'

function exampleReducer (state = [], action) {
  switch (action.type) {
    case EXAMPLE_ACTION_SUCCESS:
      return action.example

    default:
      return state
  }
}

export default exampleReducer
