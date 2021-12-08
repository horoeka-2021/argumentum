import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { monkeyAction } from '../../actions/monkey'

// import React-Bootstrap components
import Table from 'react-bootstrap/Table'

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
      <Table responsive borderless>
        {/* Generate a table using a map of the numbers array, and a ternary operator, where after every 3rd element, the current row is tag is closed, and a new row is started */}
        <tbody>
          <tr>
            <td><a href='#' onClick={() => handleClick(1)}><img id="monkey-1" className={selected(1)} src={'images/monkeys/1.jpg'} /></a></td>
            <td><a href='#' onClick={() => handleClick(2)}><img id="monkey-2" className={selected(2)} src={'images/monkeys/2.jpg'} /></a></td>
            <td><a href='#' onClick={() => handleClick(3)}><img id="monkey-3" className={selected(3)} src={'images/monkeys/3.jpg'} /></a></td>
          </tr>
          <tr>
            <td><a href='#' onClick={() => handleClick(4)}><img id="monkey-4" className={selected(4)} src={'images/monkeys/4.jpg'} /></a></td>
            <td><a href='#' onClick={() => handleClick(5)}><img id="monkey-5" className={selected(5)} src={'images/monkeys/5.jpg'} /></a></td>
            <td><a href='#' onClick={() => handleClick(6)}><img id="monkey-6" className={selected(6)} src={'images/monkeys/6.jpg'} /></a></td>
          </tr>
          <tr>
            <td><a href='#' onClick={() => handleClick(7)}><img id="monkey-7" className={selected(7)} src={'images/monkeys/7.jpg'} /></a></td>
            <td><a href='#' onClick={() => handleClick(8)}><img id="monkey-8" className={selected(8)} src={'images/monkeys/8.jpg'} /></a></td>
            <td><a href='#' onClick={() => handleClick(9)}><img id="monkey-9" className={selected(9)} src={'images/monkeys/9.jpg'} /></a></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
