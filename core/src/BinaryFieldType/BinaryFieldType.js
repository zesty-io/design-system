import React, { Component } from 'react'

import { Toggle } from '../Toggle'

import styles from './BinaryFieldType.less'
export class BinaryFieldType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      binaryInput: ''
    }
  }
  render() {
    const { binaryInput } = this.state
    return (
      <article
        className={`${styles.BinaryFieldType} ${
          binaryInput.length > this.props.charCount ? styles.Error : ''
        }`}>
        <div className={styles.BinaryFieldTypeLabel}>
          <label>{this.props.label}</label>
        </div>
        <span className={styles.Values}>{this.props.falseValue || 'No'}</span>
        <Toggle
          defaultChecked={this.props.defaultChecked}
          onChange={this.onChange}
          value={binaryInput}
        />
        <span className={styles.Values}>{this.props.trueValue || 'Yes'}</span>
      </article>
    )
  }
  onChange = evt => {
    this.setState({
      binaryInput: evt.target.checked
    })
  }
}
