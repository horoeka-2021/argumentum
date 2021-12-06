export const SET_USERNAME = 'SET_USERNAME'

// action creater for setting a username
export function updateUsername (username) {
  return {
    type: SET_USERNAME,
    username
  }
}
