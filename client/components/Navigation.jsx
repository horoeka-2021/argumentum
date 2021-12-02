// React and Redux imports
import React from 'react'

// import React-Bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function navigation () {
  return (

    <>
      <Navbar bg="primary" variant="dark" className='fixed-top'>
        <Container>
          <Navbar.Brand href="#home">Argumentum</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default navigation
