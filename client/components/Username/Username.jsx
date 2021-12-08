import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUsername } from '../actions/username'

export default function Username () {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')

  function handleChange (e) {
    dispatch(updateUsername(e.target.value))
    setUsername(e.target.value)
  }

  return (
    <div className='standard'>
      <input onChange={(e) => handleChange(e)} type='text' placeholder='username' value={username} />
    </div>
  )
}
