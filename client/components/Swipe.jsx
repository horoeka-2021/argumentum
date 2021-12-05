import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/user'

// bootstrap
import { Carousel } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { User } from '@auth0/auth0-spa-js'

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
    <main>
      <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
        {users.swipeusers && users.swipeusers.map(user => (
          <Carousel.Item key={user.id}>
            <img
              className="d-block w-100"
              src="images/grey.jpg"
              // src="images/cloud.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{user.authId}</h3>
              {user.args.map(arg => (
                <div key={arg.id}>
                  <span inline>{arg.name}</span>
                  <br></br>
                  <span inline>{arg.side}</span>
                  <br></br>
                  <span inline>{arg.story}</span>
                  <br></br>
                </div>
              ))}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </main>
  )

  // return (
  //   <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src="images/cloud.png"
  //         alt="First slide"
  //       />
  //       <Carousel.Caption>
  //         <h3>First slide label</h3>
  //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src="holder.js/800x400?text=Second slide&bg=282c34"
  //         alt="Second slide"
  //       />

  //       <Carousel.Caption>
  //         <h3>Second slide label</h3>
  //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src="holder.js/800x400?text=Third slide&bg=20232a"
  //         alt="Third slide"
  //       />

  //       <Carousel.Caption>
  //         <h3>Third slide label</h3>
  //         <p>
  //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //         </p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //   </Carousel>
  // )
}
