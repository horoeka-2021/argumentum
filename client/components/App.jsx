import React from 'react'
import { Route } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

// import Components
import Navigation from './Navigation'
import Profile from './Profile'
import Chat from './Chat.jsx'
import Reception from './Reception'
import About from './About'
import Footer from './Footer'
// import ErrorMessage from './ErrorMessage.jsx'
// import Register from './Register'

function App () {
  cacheUser(useAuth0)
  return (
    <div className='app'>
      {/* <Route path='/' component={ErrorMessage} /> */}
      <Navigation/>
      <main>
        <Route path='/' exact component={Profile} />
        <Route path='/chat' component={Chat} />
        <Route path='/reception' component={Reception} />
        <Route path='/about' component={About} />
        {/* <Route path='/register' component={Register} /> */}
      </main>
      <Footer id='footer'/>
    </div>
  )
}

export default App
