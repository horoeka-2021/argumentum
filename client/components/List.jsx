import React from 'react'
import Table from 'react-bootstrap/Table'
import { useSelector } from 'react-redux'

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
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.radio}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
