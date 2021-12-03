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
    { name: 'Pro', value: '1' },
    { name: 'Con', value: '2' }
  ]
  return (

    <>
      <Container>
        <Row>
          <Col>
            <br></br>
            <h3>Choose a topic to sharpen your wits on...</h3>
            <br></br>
            <h1>Are programmers on a different evolutionary path?</h1>
            <br></br>
          </Col>
        </Row>
        <Row className='justify-content-start'>
          <Col>
            <h3>Which side are you:</h3>
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
            <h3>Meet your opposition:</h3>
          </Col>
          <Col>
            <Button variant="outline-warning">Enter</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default profile
