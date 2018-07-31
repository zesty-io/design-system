import React, { Component } from 'react'

import styles from './BinaryFieldType.less'
export class BinaryFieldType extends Component {
  static defaultProps = {
    trueValue: 'true',
    falseValue: 'false'
  }
  state = {
    binaryInput: false,
    value: this.props.falseValue
  }

  componentDidMount() {
    this.props.defaultChecked &&
      this.setState({ binaryInput: true, value: this.props.trueValue })
  }
  render() {
    const { binaryInput } = this.state
    const { charCount, falseValue, trueValue, label } = this.props
    return (
      <article
        className={`${styles.BinaryFieldType} ${
          binaryInput.length > charCount ? styles.Error : ''
        }`}>
        <div className={styles.BinaryFieldTypeLabel}>
          <label>{label}</label>
        </div>
        <label className={styles.switch}>
          <input
            checked={binaryInput}
            onChange={this.onChange}
            type="checkbox"
            data-text-on={trueValue}
            data-text-off={falseValue}
          />
          <span className={styles.slider} />
        </label>
      </article>
    )
  }
  onChange = evt => {
    this.setState({
      binaryInput: evt.target.checked,
      value: evt.target.checked ? this.props.trueValue : this.props.falseValue
    })
  }
}
