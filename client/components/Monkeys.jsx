import React from 'react'
import Table from 'react-bootstrap/Table'

export default function Monkeys () {
  function handleClick (i) {
    console.log(i)
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
        <tbody>
          <tr>
            {numbers.map(image =>
              ((image.i + 1) % 3 === 0)
                // ? </tr><tr><td><img className='tableMonkey' onClick={() => handleClick(image.i)} src={image.src} /></td>
                ? <td><img className='tableMonkey' onClick={() => handleClick(image.i + 1)} src={image.src} /></td>
                : <td><img className='tableMonkey' onClick={() => handleClick(image.i + 1)} src={image.src} /></td>
            )}
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
