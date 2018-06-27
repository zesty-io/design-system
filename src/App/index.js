import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Guide from './components/guide'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Guide />
      </BrowserRouter>
    )
  }
}

export default App
