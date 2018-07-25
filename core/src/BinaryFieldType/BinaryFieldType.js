import React, { Component } from 'react'

import { Input } from '../Input'

import styles from './BinaryFieldType.less'
export class BinaryFieldType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      BinaryInput: ''
    }
  }
  render() {
    const { BinaryInput } = this.state
    return (
      <article
        className={`${styles.BinaryFieldType} ${
          BinaryInput.length > this.props.charCount ? styles.Error : ''
        }`}>
        <div className={styles.BinaryFieldTypeLabel}>
          <label>{this.props.label}</label>
          <span>
            {BinaryInput.length}/{this.props.charCount}
          </span>
        </div>
        <Input type="Binary" onChange={this.onChange} value={BinaryInput} />
      </article>
    )
  }
  onChange = evt => {
    this.setState({
      BinaryInput: evt.target.value
    })
  }
}
