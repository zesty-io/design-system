import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'

import { FieldTypeBinary } from '@zesty-io/core/FieldTypeBinary'

export class FieldTypeBinaryGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Binary Field Type</h1>
        <h2>Props: label, on, off, checked, disabled, callback</h2>
        <br />

        <FieldTypeBinary
          label="Custom Label"
          tooltip="Don't be a tooltip?"
          description="Description text down here..."
          onValue="On Value"
          offValue="Off Value"
        />
        <br />

        <FieldTypeBinary label="Pre-Checked" default />
        <br />

        <h3>Disabled</h3>
        <FieldTypeBinary disabled />
        <br />

        <h3>Callback</h3>
        <FieldTypeBinary
          onChange={(name, value) => {
            console.log(`Changed value: ${value}`)
          }}
        />
        <br />

        <CodeCard header="Usage" height="125" open>
          {`<FieldTypeBinary
  label="Custom Label"
  on="On Value"
  off="Off Value"
  callback={(val) => {
    alert('Changed value')
  }}
/>`}
        </CodeCard>
      </React.Fragment>
    )
  }
}

//
//         <CodeCard header="Code" height="440">
//           {`export class FieldTypeBinary extends Component {
//   state = {
//     checked: this.props.default === 1,
//     trueLabel: 'Yes',
//     falseLabel: 'No'
//   }
//   componentDidMount() {
//     console.log(this.props.options)
//     // determine labels
//     // label 1 and 0 properly
//     const binaryOptions = {
//       0: this.props.options.split(';').find(el => el.includes('0')),
//       1: this.props.options.split(';').find(el => el.includes('1'))
//     }
//     this.setState({
//       trueLabel: binaryOptions[1].split(':')[0],
//       falseLabel: binaryOptions[0].split(':')[0]
//     })
//   }
//   onChange(evt) {
//     // currently need to return a 1 or 0
//     if (this.props.callback) {
//       this.props.callback(evt.target.checked ? 1 : 0)
//     }
//     this.setState({
//       checked: evt.target.checked
//     })
//   }
//   render() {
//     const { falseLabel, trueLabel, checked } = this.state
//     const { label, disabled } = this.props
//     return (
//       <article className={styles.FieldTypeBinary}>
//         <div className={styles.FieldTypeBinaryLabel}>
//           <label>{label}</label>
//         </div>
//         <label className={styles.switch}>
//           <input
//             checked={checked}
//             disabled={disabled}
//             onChange={evt => this.onChange(evt)}
//             type="checkbox"
//             data-text-on={trueLabel}
//             data-text-off={falseLabel}
//           />
//           <span className={styles.slider} />
//         </label>
//       </article>
//     )
//   }
// }`}
//         </CodeCard>
