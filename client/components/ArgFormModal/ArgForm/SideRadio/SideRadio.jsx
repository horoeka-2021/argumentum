import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// BOOTSTRAP
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { setRadioState } from '../../../../actions/radio'

export default function SideRadio (props) {
  const argument = props.argument

  const dispatch = useDispatch()

  const radioState = useSelector(state => state.radio)

  const radios = [
    { name: argument.side0, value: argument.side0 },
    { name: '?', value: '?' },
    { name: argument.side1, value: argument.side1 }
  ]

  function handleChange (event) {
    dispatch(setRadioState(event.target.value))
  }

  return (
    <>
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioState === radio.value}
            onChange={(e) => handleChange(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  )
}
