import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/user'

// import React-Bootstrap components
import { Carousel } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

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
    <>
      <main>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h2 className='justify-content-center'>Opposition Profile:</h2>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <hr className="solid"></hr>
            <Col>
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
              <hr className="solid"></hr>
              <Table striped bordered hover size="sm" responsive="sm">
                <thead>
                  <tr>
                    <th>Argument:</th>
                    <th>Side (Yes, No or Uncertain):</th>
                    <th>Thoughts:</th>
                  </tr>
                </thead>
                <tbody>
                  {users.swipeusers && users.swipeusers[index].args.map(arg => (
                    <tr key={arg.id}>
                      <td>{arg.name}</td>
                      <td>{arg.side}</td>
                      <td>{arg.story}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <hr className="solid"></hr>
            </Col>
          </Row>
        </Container>
      </main>
  )
    </>
  )
}
