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
        <BinaryFieldType label="Default Values" />
        <br />
        <BinaryFieldType
          label="Custom Values"
          trueValue="Affirmative"
          falseValue="Negative"
          callback={value => console.log(value)}
        />
        <br />
        <BinaryFieldType
          label="Default to true"
          defaultChecked={true}
          callback={value => console.log(value)}
          trueValue="Fast"
          falseValue="Slow"
        />
        <br />
        <BinaryFieldType
          disabled
          label="Disabled"
          trueValue="Fast"
          falseValue="Slow"
        />

        <CodeCard header="Usage" height="440" open>
          {`
<BinaryFieldType label="Default Values" />

<BinaryFieldType
  label="Custom Values"
  trueValue="Affirmative"
  falseValue="Negative"
  callback={value => console.log(value)}
/>

<BinaryFieldType
  label="Default to true"
  defaultChecked={true}
  callback={value => console.log(value)}
  trueValue="Fast"
  falseValue="Slow"
/>

<BinaryFieldType
  disabled
  label="Disabled"
  trueValue="Fast"
  falseValue="Slow"
/>
`}
        </CodeCard>

        <CodeCard
          header="Code"
          url="https://gist.githubusercontent.com/grantglidewell/aea22e948944049f09a91844e8e7644e/raw/df0336d1ac249f27da496d96395d0fb54c565ea1/BinaryFieldType.js"
        />
      </React.Fragment>
    )
  }
}
