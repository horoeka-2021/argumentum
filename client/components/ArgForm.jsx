import React from 'react'
import { useSelector } from 'react-redux'

// bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// other components
import SideRadio from './SideRadio'

export default function ArgForm (props) {
  const argument = props.argument

  const radioState = useSelector(state => state.radio)

  const [why, setWhy] = React.useState('')

  function handleChange (event) {
    console.log(why)
    setWhy(event.target.value)
  }

  function handleClick (event) {
    event.preventDefault()
    console.log({ why })
    console.log({ radioState })
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <SideRadio argument={argument} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formWhy">
        <Form.Control value={why} onChange={e => handleChange(e)} type="why" placeholder="What are your thoughts on this topic?" />
      </Form.Group>
      <Button onClick={e => handleClick(e)} variant="primary" type="submit">
      Submit
      </Button>
    </Form>
  )
}
