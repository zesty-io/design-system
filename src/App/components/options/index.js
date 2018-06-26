import React, { Component } from 'react'

import styles from './options.less'
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

class Options extends Component {
  render() {
    return (
      <h1 className={styles.options}>{this.props.selected}</h1>
    )
  }
}

export default Options
