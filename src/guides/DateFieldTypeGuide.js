import React, { Component } from 'react'

import '../../core/src/DateFieldType/DateFieldType.less'
import { DateFieldType } from '../../core/src/DateFieldType'

export class DateFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <DateFieldType label="Format Date" dateFormat="YYYY/MM/DD" />
        <DateFieldType label="Format to LL" dateFormat="LL" />
        <DateFieldType label="Title Field" />
      </React.Fragment>
    )
  }
}
