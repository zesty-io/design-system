import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/app'

ReactDOM.render(
  <App
    atoms={[
      'AppLink',
      'Button',
      'Button Group',
      'Card',
      'Divider',
      'Infotip',
      'Input',
      'Loader',
      'Nav',
      'Select',
      'Toggle',
      'Url',
      'WithLoader'
    ].sort()}
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
    ].sort()}
    organisms={[]}
  />,
  document.getElementById('root')
)
