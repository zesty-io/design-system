import React, { Component } from 'react'

import Divider from './Divider'

import styles from './guide.less'
export default class DividerGuide extends Component {
  render() {
    return (
      <div className={styles.divider}>
        <Divider />
        vulputate eu scelerisque felis imperdiet
        <Divider />
        pretium nibh ipsum consequat nisl
        <Divider />
        egestas sed sed risus pretium
        <Divider />
      </div>
    )
  }
}
