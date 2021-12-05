import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ArgForm (props) {
  const argument = props.argument

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Row className="mb-3">
          <Col> <Form.Check inline type="checkbox" label={argument.side0} /> </Col>
          <Col> <Form.Check inline type="checkbox" label={'?'} /> </Col>
          <Col> <Form.Check inline type="checkbox" label={argument.side1}/> </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Why?</Form.Label> */}
        <Form.Control type="why" placeholder="What are your thoughts on this topic?" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Submit
      </Button>
    </Form>
  )
}
