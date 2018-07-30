import React, { Component } from 'react'

import '../../core/src/TextareaFieldType/TextareaFieldType.less'
import { TextareaFieldType } from '../../core/src/TextareaFieldType'

export class TextareaFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <TextareaFieldType label="Title Field" charCount="350" />
      </React.Fragment>
    )
  }
}
