import React from 'react'
import { Route } from 'react-router-dom'
import { cacheUser } from './auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './components/Authenticated/Authenticated'
import { IfUserAdded, IfUserNotAdded } from './components/Username/UserAdded'

// import Components
import Navigation from './components/Nav/Navigation'
import Welcome from './pages/Welcome/Welcome'
import Profile from './pages/Profile/Profile'
import Chat from './pages/Chat/Chat'
import Argue from './pages/Argue/Argue'
import Reception from './components/Reception/Reception'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'

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
          {/* Code to ensure new users are redirected to profile */}
          <IfUserNotAdded>
            <Route path='/' exact component={Profile} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/chat' component={Profile} />
            <Route path='/reception' component={Profile} />
          </IfUserNotAdded>
          <IfUserAdded>
            <Route path='/' exact component={Argue} />
            {/* <Route path='/profile' exact component={Profile} /> */}
            <Route path='/chat' component={Chat} />
            <Route path='/reception' component={Reception} />
          </IfUserAdded>
        </IfAuthenticated>
        <Route path='/about' component={About} />
      </main>
      <Footer id='footer'/>
    </div>
  )
}

export default App
