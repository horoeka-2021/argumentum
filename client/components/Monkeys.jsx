import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch } from 'react-redux'
import { monkeyAction } from '../actions/monkey'

export default function Monkeys () {
  const dispatch = useDispatch()

  const [monkey, setMonkey] = useState('')

  function handleClick (i) {
    setMonkey(i)
    dispatch(monkeyAction(i))
  }

  function selected (i) {
    return i === monkey
      ? 'tableMonkey selectedMonkey monkey-img'
      : 'tableMonkey monkey-img'
  }

  return (
    <div className='Monkeys'>
      <Table responsive striped borderless hover>
        {/* Generate a table using a map of the numbers array, and a ternary operator, where after every 3rd element, the current row is tag is closed, and a new row is started */}
        <tbody>
          <tr>
            <td><img className={selected(1)} onClick={() => handleClick(1)} src={'images/monkeys/1.jpg'} /></td>
            <td><img className={selected(2)} onClick={() => handleClick(2)} src={'images/monkeys/2.jpg'} /></td>
            <td><img className={selected(3)} onClick={() => handleClick(3)} src={'images/monkeys/3.jpg'} /></td>
          </tr>
          <tr>
            <td><img className={selected(4)} onClick={() => handleClick(4)} src={'images/monkeys/4.jpg'} /></td>
            <td><img className={selected(5)} onClick={() => handleClick(5)} src={'images/monkeys/5.jpg'} /></td>
            <td><img className={selected(6)} onClick={() => handleClick(6)} src={'images/monkeys/6.jpg'} /></td>
          </tr>
          <tr>
            <td><img className={selected(7)} onClick={() => handleClick(7)} src={'images/monkeys/7.jpg'} /></td>
            <td><img className={selected(8)} onClick={() => handleClick(8)} src={'images/monkeys/8.jpg'} /></td>
            <td><img className={selected(9)} onClick={() => handleClick(9)} src={'images/monkeys/9.jpg'} /></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
