import { addUser, getUsers } from '../api/user'

export const POST_USER_PENDING = 'POST_USER_PENDING'
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS'
export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const GET_USERS_PENDING = 'GET_USERS_PENDING'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const POST_USER_ARG_LIST_PENDING = 'POST_USER_ARG_LIST_PENDING'
export const POST_USER_ARG_LIST_SUCCESS = 'POST_USER_ARG_LIST_SUCCESS'

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

export function getUsersPending () {
  return {
    type: GET_USERS_PENDING
  }
}

export function getUsersSuccess (users) {
  return {
    type: GET_USERS_SUCCESS,
    users
  }
}

export function fetchUsers () {
  return dispatch => {
    dispatch(getUsersPending())
    return getUsers()
      .then(users => {
        dispatch(getUsersSuccess(users))
        return null
      })
      .catch(err => console.error(err.message))
  }
}

export function postUserArgListPending () {
  return {
    type: POST_USER_ARG_LIST_PENDING
  }
}

export function postUserArgListSuccess () {
  return {
    type: POST_USER_ARG_LIST_SUCCESS
  }
}

export function postUserArgList (list) {
  return dispatch => {
    dispatch(postUserArgListPending())
    return addUserArgList(list)
      .then(() => {
        dispatch(postUserArgListSuccess())
        return null
      })
      .catch(err => console.error(err.message))
  }
}
