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
      'Tag',
      'WithLoader'
    ].sort()}
    molecules={[
      'CollapsibleCard',
      'Search',
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
      'QuillFieldType',
      'OneToOneFieldType'
    ].sort()}
    organisms={[]}
  />,
  document.getElementById('root')
)
