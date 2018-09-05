import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'

import { BinaryFieldType } from '@zesty-io/core/dist/BinaryFieldType'
import '@zesty-io/core/dist/BinaryFieldType/BinaryFieldType.less'

export class BinaryFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Binary Field Type for manager app</p>
        <p>Props: label, trueValue, falseValue, defaultChecked, disabled</p>
        <br />
        <BinaryFieldType label="Default Values" options={'No: 0; Yes: 1'} />
        <br />
        <BinaryFieldType
          label="Custom Values"
          callback={value => console.log(value)}
          options={'No: 0; Yes: 1'}
        />
        <br />
        <BinaryFieldType
          label="No: 1; Yes: 0"
          callback={value => console.log(value)}
          default={1}
          options={'No: 1; Yes: 0'}
        />
        <br />
        <BinaryFieldType
          label="something and something else"
          callback={value => console.log(value)}
          default={0}
          options={'Something: 1; Something Else: 0'}
        />
        <CodeCard header="Usage" height="440" open>
          {`
<BinaryFieldType label="Default Values" options={'No: 0; Yes: 1'} />
<br />
<BinaryFieldType
  label="Custom Values"
  callback={value => console.log(value)}
  options={'No: 0; Yes: 1'}
/>
<br />
<BinaryFieldType
  label="No: 1; Yes: 0"
  callback={value => console.log(value)}
  default={1}
  options={'No: 1; Yes: 0'}
/>
<br />
<BinaryFieldType
  label="something and something else"
  callback={value => console.log(value)}
  default={0}
  options={'Something: 1; Something Else: 0'}
/>`}
        </CodeCard>

        <CodeCard header="Code" height="440">
          {`export class BinaryFieldType extends Component {
  state = {
    checked: this.props.default === 1,
    trueLabel: 'Yes',
    falseLabel: 'No'
  }
  componentDidMount() {
    console.log(this.props.options)
    // determine labels
    // label 1 and 0 properly
    const binaryOptions = {
      0: this.props.options.split(';').find(el => el.includes('0')),
      1: this.props.options.split(';').find(el => el.includes('1'))
    }
    this.setState({
      trueLabel: binaryOptions[1].split(':')[0],
      falseLabel: binaryOptions[0].split(':')[0]
    })
  }
  onChange(evt) {
    // currently need to return a 1 or 0
    if (this.props.callback) {
      this.props.callback(evt.target.checked ? 1 : 0)
    }
    this.setState({
      checked: evt.target.checked
    })
  }
  render() {
    const { falseLabel, trueLabel, checked } = this.state
    const { label, disabled } = this.props
    return (
      <article className={styles.BinaryFieldType}>
        <div className={styles.BinaryFieldTypeLabel}>
          <label>{label}</label>
        </div>
        <label className={styles.switch}>
          <input
            checked={checked}
            disabled={disabled}
            onChange={evt => this.onChange(evt)}
            type="checkbox"
            data-text-on={trueLabel}
            data-text-off={falseLabel}
          />
          <span className={styles.slider} />
        </label>
      </article>
    )
  }
}`}
        </CodeCard>
      </React.Fragment>
    )
  }
}
