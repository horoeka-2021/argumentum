// React and Redux imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import Actions
import { loginAction } from '../actions/loginAction.js'

// import React-Bootstrap components

// Import components

function loginComponent () {
  const login = useSelector(state => state.loginReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginAction())
  }, [])

  return (
    <div className='login-component'>
      <h1>Civil Debate</h1>
      {login}
    </div>
  )
}

export default loginComponent
