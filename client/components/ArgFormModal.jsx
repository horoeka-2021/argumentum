import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ArgForm from './ArgForm'
import { useSelector } from 'react-redux'

export default function ArgFormModal (props) {
  // code from bootstrap
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // our code
  // set name to be the argument.name given as a prop
  const argument = props.argument

  const why = useSelector(state => state.why)
  const radio = useSelector(state => state.radio)

  function handleSubmit () {
    setShow(false)
    console.log('submitting: ', why, radio)
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {argument.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{argument.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ArgForm argument={argument}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleSubmit}>
              Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
