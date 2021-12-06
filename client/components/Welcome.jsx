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
            <h3>Welcome to Argumentum</h3>
          </Col>
        </Row>
        <hr className="solid"></hr>
        <Row>
          <Col>
            <p>A place of many viewpoints.</p>

            <p>A place to challenge assumptions.</p>

            <p>A place where you are free to disagree.</p>

            <p>A place that&#39;s more than just black and white.</p>

          </Col>
        </Row>
        <hr className="solid"></hr>
        <Row>
          <Col><h4>Please <a href="/register" onClick={handleRegister}>Register</a> to enter.</h4></Col>
        </Row>
      </Container>
    </div>
  )
}
