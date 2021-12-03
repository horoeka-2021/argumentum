// React and Redux imports
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// import React-Bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Navigation () {
  const { logout, loginWithRedirect } = useAuth0()
  function handleLogoff (e) {
    e.preventDefault()
    console.log('log off')
    logout()
  }

  function handleRegister (e) {
    e.preventDefault()
    console.log('register')
    // getting error where register does not take me to the /register route... changing things up for now
    // loginWithRedirect({
    //   redirectUri: `${window.location.origin}/register`
    // })
    loginWithRedirect()
  }

  function handleSignIn (e) {
    e.preventDefault()
    console.log('sign in')
    loginWithRedirect()
  }

  return (
    <>
      <Navbar bg="primary" variant="dark" className='fixed-top'>
        <Container>
          <Navbar.Brand href="/home">Argumentum</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <IfNotAuthenticated>
              <Nav.Link href="/register" onClick={handleRegister}>Register</Nav.Link>
              <Nav.Link href="/login" onClick={handleSignIn}>Login</Nav.Link>
            </IfNotAuthenticated>
            <IfAuthenticated>
              <Nav.Link href="/logout" onClick={handleLogoff}>Log out</Nav.Link>
            </IfAuthenticated>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation