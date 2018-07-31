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
      'TextAreaFieldType',
      'NumberFieldType',
      'UrlFieldType',
      'BinaryFieldType',
      'DateFieldType',
      'DateTimeFieldType',
      'Nav'
    ]}
    molecules={[
      'Search',
      'ColorFieldType',
      'CurrencyFieldType',
      'DropDownFieldType'
    ]}
    organisms={[]}
  />,
  document.getElementById('root')
)
