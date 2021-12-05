// React and Redux imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

// import other components
import Welcome from './Welcome'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import ArgFormModal from './ArgFormModal'

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
            <Col>
              <h2>What do you want to argue about?</h2>
            </Col>
          </Row>
          <hr className="solid"></hr>
          <Row className='justify-content-start'>
            <Col>
              <DropdownButton id="dropdown-basic-button" title="Stupid">
                {profileArguments.stupid && profileArguments.stupid.map(argument => (
                  <Dropdown.Item key={argument.id} href="#/action-1">
                    <ArgFormModal argument={argument} />
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
            <hr className="solid"></hr>
          </Row>
          <Row className='justify-content-start'>
            <Col>
              <h3>Serious</h3>
            </Col>
            <hr className="solid"></hr>
          </Row>
          <Row className='justify-content-start'>
            <Col>
              <h3>Fun</h3>
            </Col>
            <hr className="solid"></hr>
          </Row>
          <Button onClick={e => handleClick(e)} variant="outline-warning">Enter Reception</Button>
        </Container>
      </IfAuthenticated>
    </>
  )
}

export default Profile
