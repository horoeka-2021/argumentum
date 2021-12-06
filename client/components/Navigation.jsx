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
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect className='fixed-top'>
        <Container>
          <Navbar.Brand href="/">Argumentum</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link href="/about">About</Nav.Link>

              <IfNotAuthenticated>
                <Nav.Link href="/register" onClick={handleRegister}>Register</Nav.Link>
                <Nav.Link href="/login" onClick={handleSignIn}>Login</Nav.Link>
              </IfNotAuthenticated>

              <IfAuthenticated>
                <Nav.Link href="/logout" onClick={handleLogoff}>Log out</Nav.Link>
              </IfAuthenticated>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
