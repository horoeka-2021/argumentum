// import api's and other actions
import { loginAPI } from '../api/loginAPI'
// import { showError } from './error'

// export action types
export const LOGIN_ACTION = 'LOGIN_ACTION'
export const LOGIN_ACTION_SUCCESS = 'LOGIN_ACTION_SUCCESS'
export const LOGIN_ACTION_PENDING = 'LOGIN_ACTION_PENDING'

export function loginActionPending () {
  return {
    type: LOGIN_ACTION_PENDING
  }
}

export function loginActionSucess (login) {
  return {
    type: LOGIN_ACTION_SUCCESS,
    login
  }
}

export function loginAction () {
  return (dispatch) => {
    dispatch(loginActionPending())
    return loginAPI()
      .then((login) => {
        dispatch(loginActionSucess(login))
        return null
      })
      .catch((err) => {
        // if the error is from our routes, this will use the message our route
        // sends back, rather than the generic 'Internal Server Error' from a
        // status 500
        // if the error is from elsewhere in the Promise chain, there won't be
        // an err.response object, so we use err.message
        // const errMessage = err.response?.text || err.message
        // dispatch(showError(errMessage))

        // just doing a standard err message
        console.log('action login error: ', err.message)
      })
  }
}
