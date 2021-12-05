import React from 'react'
import { Route } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import Navigation from './Navigation'
import Footer from './Footer'
import Register from './Register'
import Profile from './Profile'
import Reception from './Reception'
import Welcome from './Welcome'

// import icons from fontawesome
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// import ErrorMessage from './ErrorMessage.jsx'

// import Components
import Chat from './Chat.jsx'

library.add(fab, faCheckSquare, faCoffee)

function App () {
  cacheUser(useAuth0)
  return (
    <div className='app'>
      {/* <Route path='/' component={ErrorMessage} /> */}
      {/* <Route path='/' component={loginComponent} /> */}
      <Navigation/>
      <main>
        <Route path='/' exact component={Profile} />
        <Route path='/chat' component={Chat} />
        <Route path='/reception' component={Reception} />
        {/* <Route path='/register' component={Register} /> */}
      </main>
      <Footer id='footer'/>
    </div>
  )
}

export default App
