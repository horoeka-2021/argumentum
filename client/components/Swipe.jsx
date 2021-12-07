import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/user'

// bootstrap
import { Carousel, Container, Table, Button } from 'react-bootstrap'

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

  return (
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
        <Table striped bordered hover>
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
                  <Button >ARGUE!</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </main>
  )
}
