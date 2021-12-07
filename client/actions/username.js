export const SET_USERNAME = 'SET_USERNAME'
export const CONFIRM_USERNAME = 'CONFIRM_USERNAME'

// action creater for setting a username
export function updateUsername (username) {
  return {
    type: SET_USERNAME,
    username
  }
}

export function confirmUsername () {
  return {
    type: CONFIRM_USERNAME,
    set: true
  }
}
