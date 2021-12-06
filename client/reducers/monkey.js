import { MONKEY_ACTION } from '../actions/monkey'

// reducer for monkey action
export default function monkey (state = '', action) {
  switch (action.type) {
    case MONKEY_ACTION:
      return action.monkey

    default:
      return state
  }
}
