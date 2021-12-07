import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function About () {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Welcome to Argumentum</h1>
            </Col>
          </Row>
          <hr className="solid"></hr>
          <Row>
            <Col>
              <h2>A place of many viewpoints.</h2>
              <h2>A place to challenge assumptions.</h2>
              <h2>A place where you are free to disagree.</h2>
              <h2>A place that&#39;s more than just black and white.</h2>
            </Col>
          </Row>
          <hr className="solid"></hr>
          <Row>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default About
