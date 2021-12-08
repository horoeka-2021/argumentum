import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserArgsList } from '../actions/user'

// import React-Bootstrap components

export default function List () {
  const dispatch = useDispatch()

  const list = useSelector(state => state.list)
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUserArgsList(user.auth0Id))
  }, [user])

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
