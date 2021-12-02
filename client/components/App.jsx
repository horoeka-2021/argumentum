import React from 'react'
import { Route } from 'react-router-dom'
// import ErrorMessage from './ErrorMessage.jsx'

// import Components
import ExampleComponent from './ExampleComponent.jsx'
import Chat from './Chat.jsx'

function App () {
  return (
    <div className='app'>
      <Route path='/' component={ExampleComponent} />
      {/* <Route path='/' component={ErrorMessage} /> */}
      <Route path='/' component={Chat} />
    </div>
  )
}

export default App
