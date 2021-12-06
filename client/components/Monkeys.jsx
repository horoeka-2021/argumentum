import React from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch } from 'react-redux'
import { monkeyAction } from '../actions/monkey'

export default function Monkeys () {
  const dispatch = useDispatch()

  function handleClick (i) {
    console.log(i)
    dispatch(monkeyAction(i))
  }

  const numbers = Array.from({ length: 9 }, (v, i) => ({ src: `images/monkeys/${i + 1}.jpg`, i }))
  console.log(numbers)

  return (
    <div className='Monkeys'>
      <Table striped borderless hover>
        {/* <tbody>
          <tr>
            <td>
              {numbers.map(image => <img key={image.i} className='tableMonkey' onClick={() => handleClick(image.i)} src={image.src} />)}
            </td>
          </tr>
        </tbody> */}

        {/* // ? <img key={image.i} className='tableMonkey' onClick={() => handleClick(image.i)} src={image.src} /> */}

        {/* Trying to generate table programitcally... */}
        {/* <tbody>
          <tr>
            {numbers.map(image =>
              ((image.i + 1) % 3 === 0)
                ? </tr><tr><td>n</td>
                : <td>t</td>
            )}
          </tr>
        </tbody> */}

        {/* Generate a 3x3 table programitcally using a map of the numbers array, starting a new row every 3rd element */}
        {/* <tbody>
          <tr>
            {numbers.map(image =>
              ((image.i + 1) % 3 === 0)
                ? </tr><tr><td><img className='tableMonkey' onClick={() => handleClick(image.i)} src={image.src} /></td>
                : <td><img className='tableMonkey' onClick={() => handleClick(image.i + 1)} src={image.src} /></td>
            )}
          </tr>
        </tbody> */}

        {/* Generate a table using a map of the numbers array, and a ternary operator, where after every 3rd element, the current row is tag is closed, and a new row is started */}
        <tbody>
          <tr>
            <td><img className='tableMonkey' onClick={() => handleClick(1)} src={'images/monkeys/1.jpg'} /></td>
            <td><img className='tableMonkey' onClick={() => handleClick(2)} src={'images/monkeys/2.jpg'} /></td>
            <td><img className='tableMonkey' onClick={() => handleClick(3)} src={'images/monkeys/3.jpg'} /></td>
          </tr>
          <tr>
            <td><img className='tableMonkey' onClick={() => handleClick(4)} src={'images/monkeys/4.jpg'} /></td>
            <td><img className='tableMonkey' onClick={() => handleClick(5)} src={'images/monkeys/5.jpg'} /></td>
            <td><img className='tableMonkey' onClick={() => handleClick(6)} src={'images/monkeys/6.jpg'} /></td>
          </tr>
          <tr>
            <td><img className='tableMonkey' onClick={() => handleClick(7)} src={'images/monkeys/7.jpg'} /></td>
            <td><img className='tableMonkey' onClick={() => handleClick(8)} src={'images/monkeys/8.jpg'} /></td>
            <td><img className='tableMonkey' onClick={() => handleClick(9)} src={'images/monkeys/9.jpg'} /></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
