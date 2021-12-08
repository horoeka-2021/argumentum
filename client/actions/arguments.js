import { getProfileArguments } from '../api/arguments'

export const FETCH_PROFILE_ARGUMENTS_PENDING = 'FETCH_PROFILE_ARGUMENTS_PENDING'
export const FETCH_PROFILE_ARGUMENTS_SUCCESS = 'FETCH_PROFILE_ARGUMENTS_SUCCESS'

export function fetchProfileArgumentsPending () {
  return {
    type: FETCH_PROFILE_ARGUMENTS_PENDING
  }
}

export function fetchProfileArgumentsSuccess (profileArguments) {
  return {
    type: FETCH_PROFILE_ARGUMENTS_SUCCESS,
    profileArguments
  }
}

export function fetchProfileArguments () {
  return (dispatch) => {
    dispatch(fetchProfileArgumentsPending())
    return getProfileArguments()
      .then(profileArguments => {
        dispatch(fetchProfileArgumentsSuccess(profileArguments))
        return null
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
