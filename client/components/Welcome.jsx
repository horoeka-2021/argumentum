import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Welcome () {
  const { loginWithRedirect } = useAuth0()

  function handleRegister (e) {
    e.preventDefault()
    // getting error where register does not take me to the /register route... changing things up for now
    // loginWithRedirect({
    //   redirectUri: `${window.location.origin}/register`
    // })
    loginWithRedirect()
  }

  return (
    <div className="chat">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Welcome to Argumentum</h1>
          </Col>
        </Row>
        <hr className="solid"></hr>
        <Row>
          <Col>
            <h2 className="text-center">A place of many viewpoints.</h2>
            <h2 className="text-center">A place to challenge assumptions.</h2>
            <h2 className="text-center">A place where you are free to disagree.</h2>
            <h2 className="text-center">A place that&#39;s more than just black and white.</h2>
          </Col>
        </Row>
        <hr className="solid"></hr>
        <Row>

          <Col><h4 className="text-center">Please <a href="/register" onClick={handleRegister}>Register</a> to enter.</h4></Col>
        </Row>
      </Container>
    </div>
  )
}
