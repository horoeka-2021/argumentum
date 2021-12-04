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
            <h4>Your counterparty is:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Jaqueline Kennedy</h3>
          </Col>
        </Row>
        <Col><hr className="solid"></hr></Col>
        <Row>
          <Col>
            <h4>To continue please click enter.</h4>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col></Col>
          <Col>
            <Button variant="outline-warning">Enter</Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Reception
