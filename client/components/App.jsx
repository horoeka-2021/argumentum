import React from 'react'
import { Route } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
// import ErrorMessage from './ErrorMessage.jsx'

// import Components
import ExampleComponent from './ExampleComponent.jsx'

function App () {
  cacheUser(useAuth0)
  return (
    <div className='app'>
      <Route path='/' component={ExampleComponent} />
      {/* <Route path='/' component={ErrorMessage} /> */}
    </div>
  )
}

export default App
