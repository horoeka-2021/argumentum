import React from 'react'
import { Route } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import Navigation from './Navigation'
import Footer from './Footer'

// import ErrorMessage from './ErrorMessage.jsx'

// import Components
// import ExampleComponent from './ExampleComponent.jsx'
import Chat from './Chat1.jsx'
import loginComponent from './LoginComponent.jsx'

function App () {
  cacheUser(useAuth0)
  return (
    <div className='app'>
      {/* <Route path='/' component={ExampleComponent} /> */}
      {/* <Route path='/' component={ErrorMessage} /> */}
      <Route path='/chat' component={Chat} />
      <Navigation/>
      <Route path='/' exact component={loginComponent} />

      <Footer/>
    </div>
  )
}

export default App
