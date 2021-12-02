import React from 'react'
import { Route } from 'react-router-dom'
// import ErrorMessage from './ErrorMessage.jsx'

// import Components
// import ExampleComponent from './ExampleComponent.jsx'
import Chat from './Chat.jsx'
import ChatPrivate from './ChatPrivate.jsx'

function App () {
  return (
    <div className='app'>
      {/* <Route path='/' component={ExampleComponent} /> */}
      {/* <Route path='/' component={ErrorMessage} /> */}
      <Route path='/' exact component={Chat} />
      <Route path='/chat' component={ChatPrivate} />
    </div>
  )
}

export default App
