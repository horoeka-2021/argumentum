import React from 'react'
import Navigation from './Navigation'
import { Route } from 'react-router-dom'
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
    </div>
  )
}

export default App
