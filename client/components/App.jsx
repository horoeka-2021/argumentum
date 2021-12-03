import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import Profile from './Profile'

// import ErrorMessage from './ErrorMessage.jsx'

// import Components
// import ExampleComponent from './ExampleComponent.jsx'
import loginComponent from './LoginComponent.jsx'

function App () {
  return (
    <div className='app'>
      {/* <Route path='/' component={ExampleComponent} /> */}
      {/* <Route path='/' component={ErrorMessage} /> */}
      <Navigation/>
      <Route path='/' component={loginComponent} />
      <Profile/>
      <Footer/>
    </div>
  )
}

export default App
