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
          <Col><h4>Please Register to enter.</h4></Col>
        </Row>
      </Container>
    </div>
  )
}
