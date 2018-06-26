import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Guide from './components/guide'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/:component?" render={routeProps => {
          return <Guide {...routeProps} />
        }} />
      </BrowserRouter>
    )
  }
}

export default App
