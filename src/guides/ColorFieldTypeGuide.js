import React, { Component } from 'react'

import '../../core/src/ColorFieldType/ColorFieldType.less'
import { ColorFieldType } from '../../core/src/ColorFieldType'

export class ColorFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <ColorFieldType label="Title Field" />
        <br />
        <ColorFieldType label="Default to Orange Field" default="#ff9920" />
      </React.Fragment>
    )
  }
}
