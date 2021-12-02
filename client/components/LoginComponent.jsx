// React and Redux imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import Actions
import { loginAction } from '../actions/loginAction.js'

// import React-Bootstrap components
import Button from 'react-bootstrap/Button'

// Import components

function loginComponent () {
  const login = useSelector(state => state.loginReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginAction())
  }, [])

  return (
    <div className='login-component'>
      <h1>Argumentum Login</h1>
      {login}
      <Button variant="outline-primary">Register</Button>{' '}
      <Button variant="outline-primary">Log In</Button>{' '}
    </div>
  )
}

export default loginComponent
