import React from 'react'
import { useSelector } from 'react-redux'

// import React-Bootstrap components
import Table from 'react-bootstrap/Table'

export default function List () {
  const list = useSelector(state => state.list)
  return (
    <Table striped bordered hover size="sm" responsive="sm">
      <thead>
        <tr>
          <th>Argument</th>
          <th>Side</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={item.argId}>
            <td>{item.name}</td>
            <td>{item.side}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
