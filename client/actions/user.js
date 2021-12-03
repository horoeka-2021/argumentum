import { addUser } from '../api/user'

export const POST_USER_PENDING = 'POST_USER_PENDING'
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS'
export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function postUserPending () {
  return {
    type: POST_USER_PENDING
  }
}

export function postUserSuccess () {
  return {
    type: POST_USER_SUCCESS
  }
}

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

export function postUser (user) {
  return dispatch => {
    dispatch(postUserPending())
    return addUser(user)
      .then(() => {
        dispatch(postUserSuccess())
        return null
      })
      .catch(err => console.error(err.message))
  }
}
