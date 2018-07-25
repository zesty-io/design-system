import React, { Component } from 'react'

import '../../core/src/UrlFieldType/UrlFieldType.less'
import { UrlFieldType } from '../../core/src/UrlFieldType'

export class UrlFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <UrlFieldType label="Title Field" charCount="150" />
      </React.Fragment>
    )
  }
}
