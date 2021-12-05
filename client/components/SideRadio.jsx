import React, { useState } from 'react'
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function SideRadio (props) {
  const argument = props.argument

  const [radioValue, setRadioValue] = useState('1')

  const radios = [
    { name: argument.side0, value: argument.side0 },
    { name: '?', value: '?' },
    { name: argument.side1, value: argument.side1 }
  ]

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
            checked={radioValue === radio.value}
            // onChange={(e) => setRadioValue(e.currentTarget.value)}
            onChange={(e) => handleChange(e)} 
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  )
}
