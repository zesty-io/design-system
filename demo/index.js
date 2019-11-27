import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/app'
import items from './items.json'

ReactDOM.render(
  <App
    atoms={items.atoms.sort()}
    molecules={items.molecules.sort()}
    organisms={[]}
  />,
  document.getElementById('root')
)
