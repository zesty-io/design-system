import React, { Component } from 'react'

import '../../core/src/DateTimeFieldType/DateTimeFieldType.less'
import { DateTimeFieldType } from '../../core/src/DateTimeFieldType'

export class DateTimeFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <DateTimeFieldType label="Title Field" />
      </React.Fragment>
    )
  }
}
