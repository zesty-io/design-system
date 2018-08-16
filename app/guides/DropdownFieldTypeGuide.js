import React, { Component } from 'react'

import '@zesty-io/core/dist/Select/Select.less'
import { DropDownFieldType } from '@zesty-io/core/dist/DropDownFieldType'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class DropDownFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Dropdown Field Type</p>
        <p>Props: options(array of objects), label</p>
        <br />
        <DropDownFieldType
          label="Label Field"
          callback={value => console.log(value)}
          options={[
            { value: 'a value that can be used in some way', text: 'hi' },
            { value: 'a value that can be used in some way', text: 'hello' },
            {
              value: 'a value that can be used in some way',
              text: 'buenos dias'
            },
            { value: 'a value that can be used in some way', text: 'good day' }
          ]}
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="300px"
            code={`
<DropDownFieldType
  label="Label Field"
  options={[
    { value: 'a value that can be used in some way', text: 'hi' },
    { value: 'a value that can be used in some way', text: 'hello' },
    {
      value: 'a value that can be used in some way',
      text: 'buenos dias'
    },
    { value: 'a value that can be used in some way', text: 'good day' }
  ]}
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/58a6f8bbb0f89f77bef63a745b1e9570/raw/8a023d7a27f3a58fd75132437cc002c4ba054f90/DropDownFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
