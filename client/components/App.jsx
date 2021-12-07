import React from 'react'
import { Route } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

// import Components
import Navigation from './Navigation'
import Welcome from './Welcome'
import Argue from './ArgueRoom'
import Profile from './Profile'
import Chat from './Chat.jsx'
import Reception from './Reception'
import About from './About'
import Footer from './Footer'
import Argue from './Argue'
// import ErrorMessage from './ErrorMessage.jsx'
// import Register from './Register'

function App () {
  cacheUser(useAuth0)
  return (
    <div className='app'>
      <Navigation/>
      <main>
        <IfNotAuthenticated>
          <Route path='/' exact component={Welcome} />
        </IfNotAuthenticated>

        <IfAuthenticated>
          <Route path='/' exact component={Argue} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/chat' component={ArgueRoom} />
          <Route path='/reception' component={Reception} />
        </IfAuthenticated>
        <Route path='/about' component={About} />
      </main>
      <Footer id='footer'/>
    </div>
  )
}

export default App
