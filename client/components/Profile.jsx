// React and Redux imports
import React from 'react'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function profile () {
  return (

    <>
      <Container>
        <br></br>
        <h3>Add topic you want to discuss about</h3>

        <Button variant="outline-primary">Accept</Button>{' '}
        <Button variant="outline-secondary">Decline</Button>{' '}

        <Button variant="outline-warning">Discussion Warning!</Button>{' '}

      </Container>

    </>
  )
}

export default profile
