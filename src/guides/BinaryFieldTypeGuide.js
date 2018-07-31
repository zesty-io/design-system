import React, { Component } from 'react'

import '../../core/src/BinaryFieldType/BinaryFieldType.less'
import { BinaryFieldType } from '../../core/src/BinaryFieldType'

export class BinaryFieldTypeGuide extends Component {
  render() {
    // defaults
    return (
      <React.Fragment>
        <BinaryFieldType label="Default Values" />
        <br />
        <BinaryFieldType
          label="Custom Values"
          trueValue="Affirmative"
          falseValue="Negative"
        />
        <br />
        <BinaryFieldType
          label="Default to true"
          defaultChecked={true}
          trueValue="Fast"
          falseValue="Slow"
        />
      </React.Fragment>
    )
  }
}
