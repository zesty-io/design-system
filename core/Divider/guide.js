import React, { Component } from 'react'

import Divider from './Divider'

import styles from './guide.less'
export default class DividerGuide extends Component {
  render() {
    return (
      <div className={styles.divider}>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
      </div>
    )
  }
}
