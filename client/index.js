import React from 'react'
import { render } from 'react-dom'
// import { ReactDOM } from 'react'
// import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})

// IF YOU WANT OAuth 2.0
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     /**
//      * Auth0Provider is a component that has a hook that provides
//      * all authorization operations
//      */
//     <Auth0Provider
//       domain={'horoeka-21-tane.au.auth0.com'}
//       clientId={'MQcOgMhBM1xvThQoN402V0tFmmAauVHY'}
//       redirectUri={window.location.origin}
//       audience='https://fruits/api'
//     >
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </Auth0Provider>,
//     document.getElementById('app')
//   )
// })
