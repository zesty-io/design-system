import React, { Component } from 'react'

import { Input } from '../Input'

import styles from './TextareaFieldType.less'
export class TextareaFieldType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textInput: ''
    }
  }
  render() {
    const { textInput } = this.state
    return (
      <article
        className={`${styles.TextareaFieldType} ${
          textInput.length > this.props.charCount ? styles.Error : ''
        }`}>
        <div className={styles.TextareaFieldTypeLabel}>
          <label>{this.props.label}</label>
          <span>
            {textInput.length}/{this.props.charCount}
          </span>
        </div>
        <textarea
          className={styles.TextArea}
          onChange={this.onChange}
          value={textInput}
        />
      </article>
    )
  }
  onChange = evt => {
    this.setState({
      textInput: evt.target.value
    })
  }
}
