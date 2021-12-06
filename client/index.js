import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain={'argumentum-eda.au.auth0.com'}
      clientId={'SJltMt7PecLv4daxzzTuYuRkrNG0Pu2h'}
      redirectUri={window.location.origin}
      audience='https://argumentum/api'
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})

export default store
