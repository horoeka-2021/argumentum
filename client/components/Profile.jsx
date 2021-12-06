// React and Redux imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

// import from fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { Accordion } from 'react-bootstrap'

// import other components
import Welcome from './Welcome'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import ArgFormModal from './ArgFormModal'
import List from './List'
import Monkeys from './Monkeys'

// import apis, actions, and reducers
import { postUser } from '../actions/user'
import addChatUser from '../api/addChatUser'
import { fetchProfileArguments } from '../actions/arguments'

function Profile () {
  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector(state => state.user)

  // Get the available arguments the user can choose from
  const profileArguments = useSelector(state => state.profileArguments)
  useEffect(() => {
    dispatch(fetchProfileArguments())
  }, [])
  console.log('Profile profileArguments: ', profileArguments)

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
            <h2>What do you want to argue about?</h2>
            <hr className="solid"></hr>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                </Col>
              </Row>
              <Row className='justify-content-start'>

                <Accordion>

                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Stupid</Accordion.Header>
                    <Accordion.Body>
                      {profileArguments.stupid && profileArguments.stupid.map(argument => (
                        <Dropdown.Item key={argument.id} href="#/action-1">
                          <ArgFormModal argument={argument} />
                        </Dropdown.Item>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Serious</Accordion.Header>
                    <Accordion.Body>
                      {profileArguments.serious && profileArguments.serious.map(argument => (
                        <Dropdown.Item key={argument.id} href="#/action-1">
                          <ArgFormModal argument={argument} />
                        </Dropdown.Item>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Fun</Accordion.Header>
                    <Accordion.Body>
                      {profileArguments.fun && profileArguments.fun.map(argument => (
                        <Dropdown.Item key={argument.id} href="#/action-1">
                          <ArgFormModal argument={argument} />
                        </Dropdown.Item>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </Row>
              <Row>
              </Row>
            </Col>
            <Col>
              <List />
            </Col>
            <Row><br></br></Row>
            <hr className="solid"></hr>
          </Row>
          <Row>
            <h2>What monkey represents your arguing style best?</h2>
            <hr className="solid"></hr>
          </Row>
          <Row>
            <Monkeys />
          </Row>
          <Row>
            <Button onClick={e => handleClick(e)} variant="outline-dark">Done</Button>
          </Row>
        </Container>
      </IfAuthenticated>

    </>
  )
}

export default Profile
