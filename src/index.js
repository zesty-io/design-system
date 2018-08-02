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
      'Nav'
    ]}
    molecules={[
      'Search',
      'CollapsibleCard',
      'ColorFieldType',
      'CurrencyFieldType',
      'TextFieldType',
      'TextAreaFieldType',
      'NumberFieldType',
      'UrlFieldType',
      'BinaryFieldType',
      'DateFieldType',
      'DateTimeFieldType',
      'DropDownFieldType',
      'WYSIWYGFieldType',
      'DraftFieldType',
      'QuillFieldType'
    ]}
    organisms={[]}
  />,
  document.getElementById('root')
)
