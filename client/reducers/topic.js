import { TOPIC } from '../actions/createChat'

export default function topic (state = '', action) {
  switch (action.type) {
    case TOPIC:
      return action.topic
    default:
      return state
  }
}
