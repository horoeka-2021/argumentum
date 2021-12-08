import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/user'

// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

// actions
import { createChat, setTopic } from '../actions/createChat'

export default function Swipe () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  console.log({ users })

  // bootstrap code
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    console.log('selectedIndex', selectedIndex)
    setIndex(selectedIndex)
  }

  function handleClick (topic) {
    console.log('index', index)
    // sets the redux state of email to be this email
    const username = users.swipeusers[index].username
    dispatch(createChat(username))
    dispatch(setTopic(topic))
  }

  return (
    <>
      <main>
        <Row>
          <Col></Col>
          <Col>
            <h2>{users.swipeusers && users.swipeusers[index].username}</h2>
          </Col>
          <Col></Col>
          <hr className="solid"></hr>
        </Row>
        <Row>
          <Carousel activeIndex={index} onSelect={handleSelect} variant='dark' interval='100000' keyboard='true'>
            {users.swipeusers && users.swipeusers.map(swipeuser => {
              if (swipeuser.authId !== user.auth0Id) {
                return (
                  <Carousel.Item key={swipeuser.authId}>
                    <img
                      className="d-block w-100 carousel"
                      src={`images/monkeys/${swipeuser.image}.jpg`}
                      alt={`images/monkeys/${swipeuser.image}.jpg`}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              }
            })}
          </Carousel>
        </Row>
        <Row>
          <Container>
            <hr className="solid"></hr>
            <Table striped bordered hover size="sm" responsive="sm">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Side</th>
                  <th>Why?</th>
                  <th>Argue?</th>
                </tr>
              </thead>
              <tbody>
                {users.swipeusers && users.swipeusers[index].args.map(arg => (
                  <tr key={arg.id + arg.userId + arg.story}>
                    <td>{arg.name}</td>
                    <td>{arg.side}</td>
                    <td>{arg.story}</td>
                    <td>
                      <Link to='/chat'>
                        {/* <Button onClick={index => handleClick(index)}> */}
                        <Button onClick={() => handleClick(arg.name)} variant='dark'>
                      ARGUE!
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Row>
      </main>
    </>
  )
}
