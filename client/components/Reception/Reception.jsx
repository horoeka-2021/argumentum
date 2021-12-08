// React and Redux imports
import React from 'react'
import { useHistory } from 'react-router'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// import components and actions etc
import Swipe from '../Swipe'

function Reception () {
  const history = useHistory()
  function handleClick (event) {
    history.push('/chat')
  }

  return (

    <>
      <Container>
        <Row>
          <Swipe />
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button variant="dark" onClick={e => handleClick(e)}>Enter</Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Reception
