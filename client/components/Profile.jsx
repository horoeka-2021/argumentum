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
import { postUser, postUserArgList } from '../actions/user'
import addChatUser from '../api/addChatUser'
import { fetchProfileArguments } from '../actions/arguments'
import Username from './Username'

function Profile () {
  const dispatch = useDispatch()
  const history = useHistory()

  // Get states of things from redux
  const user = useSelector(state => state.user)
  const list = useSelector(state => state.list)
  const username = useSelector(state => state.username)
  const monkey = useSelector(state => state.monkey)

  // Get the available arguments the user can choose from
  const profileArguments = useSelector(state => state.profileArguments)
  useEffect(() => {
    dispatch(fetchProfileArguments())
  }, [])

  function handleClick (event) {
    // set-up: data for chatengine
    const chatUser = {
      username: user.email,
      secret: user.auth0Id
    }

    // set-up: user data for our sesrver
    const dbUser = {
      auth0Id: user.auth0Id,
      username: username,
      image: monkey,
      email: user.email
    }

    // set-up: user's arguments list for our server
    const dbList = {
      authId: user.auth0Id,
      args: list
    }

    // TELL CHAT ENGINE THAT WE HAVE A NEW USER!
    addChatUser(chatUser)
      .then(() => {
        return null
      })
      .catch(err => {
        console.log('Error adding user to chat engine, maybe they already exist though!')
        console.error(err.message)
      })

    // add user to database
    // POST /api/v1/users
    dispatch(postUser(dbUser))

    // add user's list of arguments to database
    // POST /api/v1/userArgs
    dispatch(postUserArgList(dbList))
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
            <h2>What primate represents your arguing style best?</h2>
            <hr className="solid"></hr>
          </Row>
          <Row>
            <Monkeys />
          </Row>
          <Row>
            <h2>Choose an anonymous username!</h2>
            <hr className="solid"></hr>
          </Row>
          <Row>
            <Username />
          </Row>
          <Row>
            <hr className="solid"></hr>
            <Button onClick={e => handleClick(e)} variant="outline-dark">Done</Button>
          </Row>
        </Container>
      </IfAuthenticated>

    </>
  )
}

export default Profile
