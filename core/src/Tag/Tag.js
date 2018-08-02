import React, { Component } from 'react'

import styles from './tags.less'

export class Tag extends Component {
  render() {
    return (
      <span className={styles.Tag}>
        <i className="fa fa-times" onClick={this.removeTag} />
        <a href={this.props.tagZUID}>{this.props.tagName}</a>
      </span>
    )
  }
  removeTag = () => {
    if (this.props.onRemove) {
      this.props.onRemove(this.props.tagZUID)
    }
  }
}
