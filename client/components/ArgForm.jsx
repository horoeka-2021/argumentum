import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideRadio from './SideRadio'

export default function ArgForm (props) {
  const argument = props.argument

  const [why, setWhy] = React.useState('')

  function handleChange (event) {
    console.log(why)
    setWhy(event.target.value)
  }

  function handleSelection (event) {
    const id = event.target.value
    console.log(id)
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <SideRadio argument={argument} />
        {/* <Row className="mb-3">
          <Col> <Form.Check inline name="side" type="checkbox" onChange={e => handleSelection(e)} label={argument.side0} /> </Col>
          <Col> <Form.Check inline name="side" type="checkbox" label={'?'} /> </Col>
          <Col> <Form.Check inline name="side" type="checkbox" label={argument.side1}/> </Col>
        </Row> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formWhy">
        {/* <Form.Label>Why?</Form.Label> */}
        <Form.Control value={why} onChange={e => handleChange(e)} type="why" placeholder="What are your thoughts on this topic?" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Submit
      </Button>
    </Form>
  )
}
