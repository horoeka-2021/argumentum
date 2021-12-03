import React from 'react'
import { Route } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import Navigation from './Navigation'
import Footer from './Footer'
import Register from './Register'
import Profile from './Profile'
import Welcome from './Welcome'

// import ErrorMessage from './ErrorMessage.jsx'

// import Components
// import ExampleComponent from './ExampleComponent.jsx'
import Chat from './Chat.jsx'
import loginComponent from './LoginComponent.jsx'

function App () {
  cacheUser(useAuth0)
  return (
    <div className='app'>
      {/* <Route path='/' component={ExampleComponent} /> */}
      {/* <Route path='/' component={ErrorMessage} /> */}
      {/* <Route path='/' exact component={loginComponent} /> */}
      {/* <Route path='/' component={loginComponent} /> */}
      <Navigation/>
      <Route path='/' exact component={Profile} />
      <Route path='/chat' component={Chat} />
      {/* <Route path='/register' component={Register} /> */}
      <Footer/>
    </div>
  )
}

export default App
