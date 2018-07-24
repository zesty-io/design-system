import React, { Component } from 'react'

import '../../core/src/CurrencyFieldType/CurrencyFieldType.less'
import { CurrencyFieldType } from '../../core/src/CurrencyFieldType'

export class CurrencyFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <CurrencyFieldType label="Title Field" />
      </React.Fragment>
    )
  }
}
