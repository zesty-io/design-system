import React, { Component } from 'react'

import '../../core/src/WithLoader/WithLoader.less'
import { WithLoader } from '../../core/src/WithLoader'

export class WithLoaderGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A loading indicator for inline use</p>
        <WithLoader />
      </React.Fragment>
    )
  }
}
