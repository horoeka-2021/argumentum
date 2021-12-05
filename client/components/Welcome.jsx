import React from 'react'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Welcome () {
  return (
    <div className="chat">

      <Container>
        <Row>
          <Col><h1>Sign in or Register!</h1></Col>
        </Row>
      </Container>

    </div>
  )
}
