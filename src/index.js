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
      'Select',
      'Input',
      'Toggle',
      'Infotip',
      'TextFieldType',
      'NumberFieldType',
      'UrlFieldType',
      'BinaryFieldType',
      'Nav'
    ]}
    molecules={['Search', 'ColorFieldType', 'CurrencyFieldType']}
    organisms={[]}
  />,
  document.getElementById('root')
)
