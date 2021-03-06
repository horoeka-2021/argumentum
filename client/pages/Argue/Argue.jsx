// React and Redux imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { Accordion } from 'react-bootstrap'

// import other components
import ArgFormModal from '../../components/ArgFormModal/ArgFormModal'
import List from '../../components/List/List'

// import apis, actions, and reducers
import { postUserArgList } from '../../actions/user'
import { fetchProfileArguments } from '../../actions/arguments'

function Argue () {
  const dispatch = useDispatch()
  const history = useHistory()

  // Get states of things from redux
  const user = useSelector(state => state.user)
  const list = useSelector(state => state.list)

  // Get the available arguments the user can choose from
  const profileArguments = useSelector(state => state.profileArguments)

  useEffect(() => {
    dispatch(fetchProfileArguments())
  }, [])

  function handleClick (event) {
    // set-up: user's arguments list for our server
    const dbList = {
      authId: user.auth0Id,
      args: list
    }

    // add user's list of arguments to database
    // POST /api/v1/userArgs
    dispatch(postUserArgList(dbList))
    history.push('/reception')
  }

  // checks to see if there is an argument of matching id already in the list state
  function checkList (id) {
    const listMatch = list.findIndex(item => item.argId === id)
    return listMatch !== -1
  }

  return (
    <>
      <Container>
        <Row>
          <h2>Select an Argument from dropdown menus:</h2>
          <hr className="solid"></hr>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
              </Col>
            </Row>
            <Row className='justify-content-start'>

              <Accordion className="background">

                <Accordion.Item eventKey="0">
                  <Accordion.Header>Stupid</Accordion.Header>
                  <Accordion.Body>
                    {profileArguments.stupid && profileArguments.stupid.map(argument => {
                      if (checkList(argument.id)) {
                        return null
                      } else {
                        return (
                          <Dropdown.Item key={argument.id} href="#/action-1">
                            <ArgFormModal argument={argument} />
                          </Dropdown.Item>
                        )
                      }
                    })}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Serious</Accordion.Header>
                  <Accordion.Body>
                    {profileArguments.serious && profileArguments.serious.map(argument => {
                      if (checkList(argument.id)) {
                        return null
                      } else {
                        return (
                          <Dropdown.Item key={argument.id} href="#/action-1">
                            <ArgFormModal argument={argument} />
                          </Dropdown.Item>
                        )
                      }
                    })}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Fun</Accordion.Header>
                  <Accordion.Body>
                    {profileArguments.fun && profileArguments.fun.map(argument => {
                      if (checkList(argument.id)) {
                        return null
                      } else {
                        return (
                          <Dropdown.Item key={argument.id} href="#/action-1">
                            <ArgFormModal argument={argument} />
                          </Dropdown.Item>
                        )
                      }
                    })}
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
          <Button onClick={e => handleClick(e)} variant="dark">Click to select your Opposition</Button>
        </Row>
        <hr className="solid"></hr>
      </Container>
    </>
  )
}

export default Argue
