import React, { Component } from 'react'

import styles from './BinaryFieldType.less'
export class BinaryFieldType extends Component {
  static defaultProps = {
    trueValue: 'True',
    falseValue: 'False'
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
    const { falseValue, trueValue, label, disabled } = this.props
    return (
      <article>
        <div className={styles.BinaryFieldTypeLabel}>
          <label>{label}</label>
        </div>
        <label className={styles.switch}>
          <input
            checked={binaryInput}
            disabled={disabled}
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
