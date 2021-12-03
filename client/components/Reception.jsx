// React and Redux imports
import React from 'react'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Reception () {
  return (

    <>
      <Container>
        <Row>
          <Col>
            <h3>Your counterparty for this joust is:</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>The honorable: Lord Wallace</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Please wait for the green light and then hit the enter button below.</h3>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col></Col>
          <Col>
            <Button variant="outline-warning">Enter the Debate!</Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Reception
