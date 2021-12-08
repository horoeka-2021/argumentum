// React and Redux imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

// import from fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

// import other components
import Monkeys from './Monkeys'

// import apis, actions, and reducers
import { postUser } from '../actions/user'
import addChatUser from '../api/addChatUser'
import Username from './Username'
import { confirmUsername } from '../actions/username'
import { getUserProfile } from '../api/user'

function Profile () {
  const dispatch = useDispatch()
  const history = useHistory()

  // Get states of things from redux
  const user = useSelector(state => state.user)
  const username = useSelector(state => state.username)
  const monkey = useSelector(state => state.monkey)
  const setUsername = useSelector(state => state.setUsername)

  // useEffect(() => {
  //   getUserProfile(user.auth0Id)
  //     .then(res => {
  //       console.log(res)
  //       // if res.username dispatch confirmUsername
  //       if (res.username) {
  //         console.log('dispatch confirmUsername')
  //         dispatch(confirmUsername())
  //       }
  //       return null
  //     })
  //     .catch(err => {
  //       console.error(err.message)
  //     })
  // }, [user.auth0Id])

  // check to see if we have the user added to our database
  // if we do, this will cause the app component to re-do the routes
  // causing the user to see the Argue component
  if (user.auth0Id) {
    getUserProfile(user.auth0Id)
      .then(res => {
        console.log(res)
        // if res.username dispatch confirmUsername
        if (res) {
          console.log('dispatch confirmUsername')
          dispatch(confirmUsername(res.username))
        }
        return null
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  function handleClick (event) {
    if (!monkey || !username) {
      return null
    }

    console.log('handleClick, username: ', username)

    // set-up: data for chatengine
    const chatUser = {
      // username: user.email,
      username: username,
      // secret: user.auth0Id
      secret: user.auth0Id
    }

    // set-up: user data for our sesrver
    const dbUser = {
      auth0Id: user.auth0Id,
      username: username,
      image: monkey,
      email: user.email
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

    dispatch(confirmUsername(username))

    history.push('/')
  }

  return (
    <>
      <Container>
        <Row>
          <h2>Important: create an ANONYMOUS username!</h2>
          <hr className="solid"></hr>
        </Row>
        <Row>
          <Username />
          <hr className="solid"></hr>
        </Row>
        <Row>
          <h2>Select an Avatar:</h2>
          <hr className="solid"></hr>
        </Row>
        <Row>
          <Monkeys />
        </Row>
        <Row>
          <hr className="solid"></hr>
          <Button onClick={e => handleClick(e)} variant="dark">Click to Update Your Profile</Button>
        </Row>
        <hr className="solid"></hr>
      </Container>
    </>
  )
}

export default Profile
