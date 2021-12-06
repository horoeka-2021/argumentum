import { MONKEY_ACTION } from '../actions/monkey'

// reducer for monkey action
export default function monkey (state = '', action) {
  switch (action.type) {
    case MONKEY_ACTION:
      console.log('monkey action reduced')
      return action.monkey

    default:
      console.log('default')
      return state
  }
}
