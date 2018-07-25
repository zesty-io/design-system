import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/app'

ReactDOM.render(
  <App
    atoms={[
      'Button',
      'Button Group',
      'Card',
      'Divider',
      'Loader',
      'WithLoader',
      'Search',
      'Select',
      'Input',
      'Toggle',
      'Infotip'
    ]}
    molecules={[
      'TextFieldType',
      'NumberFieldType',
      'ColorFieldType',
      'CurrencyFieldType',
      'BinaryFieldType',
      'Nav'
    ]}
    organisms={[]}
  />,
  document.getElementById('root')
)
