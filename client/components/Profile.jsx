// React and Redux imports
import React, { useState } from 'react'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function profile () {
  const [radioValue, setRadioValue] = useState('1')

  const radios = [
    { name: '  For  ', value: '1' },
    { name: 'Against', value: '2' }
  ]
  return (

    <>
      <Container>
        <Row>
          <Col>
            <br></br>
            <h3>Choose a topic to wrestle with...</h3>
            <br></br>
            <h1>Are programmers on a different evolutionary path?</h1>
            <br></br>
          </Col>
        </Row>
        <Row className='justify-content-start'>
          <Col>
            <h3>I wish to take a side:</h3>
          </Col>
          <Col>
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col>---</Col>
        </Row>
        <Row className='justify-content-start'>
          <Col>
            <h3>Take me to a debate:</h3>
          </Col>
          <Col>
            <Button variant="outline-warning">Enter the Debate</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default profile
