import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ArgForm from './ArgForm'

export default function ArgFormModal (props) {
  // code from bootstrap
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // our code
  // set name to be the argument.name given as a prop
  const argument = props.argument

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
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
          {/* POLISH: move submit button here (requries 'why' to be global redux state)>
          {/* <Button variant="secondary" onClick={handleClose}>
              Close
          </Button> */}
          {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}
