import React from 'react'
import { useSelector } from 'react-redux'

const UserAdded = () => {
  const username = useSelector(state => state.setUsername)

  if (username) {
    return true
  } else {
    return false
  }
}

export function IfUserAdded ({ children }) {
  return UserAdded()
    ? <>{ children }</>
    : null
}

export function IfUserNotAdded ({ children }) {
  return !UserAdded()
    ? <>{ children }</>
    : null
}
