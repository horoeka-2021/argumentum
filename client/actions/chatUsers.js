import addChatUser from '../api/addChatUser'

export const POST_USER_PENDING = 'POST_USER_PENDING'
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS'

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

export function postUser (user) {
  return dispatch => {
    dispatch(postUserPending())
    return addChatUser(user)
      .then(() => {
        dispatch(postUserSuccess())
        return null
      })
      .catch(err => console.err(err.message))
  }
}
