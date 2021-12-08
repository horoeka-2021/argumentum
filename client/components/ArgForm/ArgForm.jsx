import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// bootstrap
import Form from 'react-bootstrap/Form'

// other components and actions etc
import SideRadio from './SideRadio/SideRadio'
import setWhy from '../../actions/why'

export default function ArgForm (props) {
  const argument = props.argument
  const dispatch = useDispatch()

  const why = useSelector(state => state.why)

  function handleChange (event) {
    dispatch(setWhy(event.target.value))
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <SideRadio argument={argument} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formWhy">
        <Form.Control value={why} onChange={e => handleChange(e)} type="why" placeholder="What are your thoughts on this topic?" />
      </Form.Group>
    </Form>
  )
}
