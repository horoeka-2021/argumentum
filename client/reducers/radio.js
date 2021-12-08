import { SET_RADIO_STATE } from '../actions/radio'

function radio (state = [], action) {
  switch (action.type) {
    case SET_RADIO_STATE:
      return action.state

    default:
      return state
  }
}

export default radio
