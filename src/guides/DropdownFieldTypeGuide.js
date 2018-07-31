import React, { Component } from 'react'

import '../../core/src/Select/Select.less'
import { DropDownFieldType } from '../../core/src/DropDownFieldType'

export class DropDownFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <DropDownFieldType
          label="Label Field"
          options={[
            { value: 'a value that can be used in some way', text: 'hi' },
            { value: 'a value that can be used in some way', text: 'hello' },
            {
              value: 'a value that can be used in some way',
              text: 'buenos dias'
            },
            { value: 'a value that can be used in some way', text: 'good day' }
          ]}
        />
      </React.Fragment>
    )
  }
}
