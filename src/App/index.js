import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Guide from './components/guide'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" render={routeProps => {
          return <Guide {...routeProps} />
        }} />
      </BrowserRouter>
    )
  }
}

export default App
