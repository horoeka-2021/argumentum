import { SET_WHY } from '../actions/why'

function why (state = [], action) {
  switch (action.type) {
    case SET_WHY:
      return action.why

    default:
      return state
  }
}

export default why
