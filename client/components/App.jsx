import React from 'react'
import { Route } from 'react-router-dom'
// import ErrorMessage from './ErrorMessage.jsx'

// import Components
import ExampleComponent from './ExampleComponent.jsx'

// import React-Bootstrap components
import Button from 'react-bootstrap/Button'

function App () {
  return (
    <div className='app'>
      <Route path='/' component={ExampleComponent} />
      {/* <Route path='/' component={ErrorMessage} /> */}
      <Button variant='secondary'> Just a Button </Button>
    </div>
  )
}

export default App
