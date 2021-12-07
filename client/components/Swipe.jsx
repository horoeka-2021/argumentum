import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/user'

// bootstrap
import { Carousel, Container, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { createChat } from '../actions/createChat'

export default function Swipe () {
  const dispatch = useDispatch()
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

  function handleClick () {
    console.log('index', index)
    // sets the redux state of email to be this email
    const username = users.swipeusers[index].email
    dispatch(createChat(username))
  }

  return (
    <>
      <main>
        <Carousel activeIndex={index} onSelect={handleSelect} variant='dark' interval='100000' keyboard='true'>
          {users.swipeusers && users.swipeusers.map(user => (
            <Carousel.Item key={user.id}>
              <img
                className="d-block w-100 carousel"
                src={`images/monkeys/${user.image}.jpg`}
                alt={`images/monkeys/${user.image}.jpg`}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
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
                <tr key={arg.id}>
                  <td>{arg.name}</td>
                  <td>{arg.side}</td>
                  <td>{arg.story}</td>
                  <td>
                    <Link to='/chat'>
                      {/* <Button onClick={index => handleClick(index)}> */}
                      <Button onClick={() => handleClick()}>
                      ARGUE!
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </main>
    </>
  )
}
