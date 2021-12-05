// React and Redux imports
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Welcome from './Welcome'

// import other components
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

// import apis, actions, and reducers
import { postUser } from '../actions/user'
import addChatUser from '../api/addChatUser'

function profile () {
  const [radioValue, setRadioValue] = useState('1')
  const user = useSelector(state => state.user)
  console.log('TCL: profile -> user', user)
  const dispatch = useDispatch()
  // use history
  const history = useHistory()

  const radios = [
    { name: 'Pro', value: '1' },
    { name: 'Con', value: '2' }
  ]

  function handleClick (event) {
    // set up userChat as an object containing the user.auth0_id and email
    const chatUser = {
      username: user.email,
      secret: user.auth0Id
    }

    // user to be sent to our server
    const dbUser = {
      auth0Id: user.auth0Id,
      email: user.email
    }

    // TELL CHAT ENGINE THAT WE HAVE A NEW USER!
    addChatUser(chatUser)
      .then(() => {
        // history.push('/reciption')
        return null
      })
      .catch(err => {
        console.error(err)
      })

    // add user to database
    dispatch(postUser(dbUser))
    history.push('/reception')
  }

  return (
    <>
      <IfNotAuthenticated>
        <Welcome/>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <Container>
          <Row>
            <Col>
              <br></br>
              <h3>Choose a topic to wrestle with...</h3>
              <br></br>
              <h1>Are programmers on a different evolutionary path?</h1>
              <br></br>
            </Col>
            <hr className="solid"></hr>
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
            <Col><hr className="solid"></hr></Col>
          </Row>
          <Row className='justify-content-start'>
            <Col>
              <h3>Take me to a debate:</h3>
            </Col>
            <Col>
              <Button onClick={e => handleClick(e)} variant="outline-warning">Enter Reception</Button>
            </Col>
          </Row>
          <hr className="solid"></hr>
        </Container>
      </IfAuthenticated>
    </>
  )
}

export default profile