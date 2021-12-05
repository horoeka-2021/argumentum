import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/user'

// bootstrap
import { Carousel } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    setIndex(selectedIndex)
  }

  return (
    <Col>
      <Row>
        <h1>Swipe</h1>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </Row>
      <Row>
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
          {/* <div className="carousel"> */}
          <Row>
            {users.map(user => (
              <Carousel.Item key={user.id}>
                {user.args.map(arg => (
                  <div key={arg.id}>
                    {arg.name}
                  </div>
                ))}
                {/* <Carousel.Caption>
            <div className='carouselCaption'>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption> */}
              </Carousel.Item>
            ))}
          </Row>
          {/* </div> */}
        </Carousel>
      </Row>
    </Col>
  )
}
