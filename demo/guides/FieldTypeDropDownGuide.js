import React, { Component } from 'react'

import { FieldTypeDropDown } from '@zesty-io/core/FieldTypeDropDown'
import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class FieldTypeDropDownGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Dropdown Field Type</p>
        <p>Props: options(array of objects), label</p>
        <br />
        <FieldTypeDropDown
          label="Label Field"
          tooltip="Hello World of Tooltips"
          callback={value => console.log(value)}
          description="Description Text down below"
          tag="parsley_name"
          options={[
            { value: 'a value that can be used in some way', text: 'hi' },
            { value: 'a value that can be used in some way', text: 'hello' },
            {
              value: 'a value that can be used in some way',
              text: 'buenos dias'
            },
            { value: 'a value that can be used in some way', text: 'good day' }
          ]}
          name="required"
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="300px"
            code={`
<FieldTypeDropDown
  label="Label Field"
  description="Description Text down below"
  tag="parsley_name"
  tooltip="Hello World of Tooltips"
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
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/58a6f8bbb0f89f77bef63a745b1e9570/raw/8a023d7a27f3a58fd75132437cc002c4ba054f90/FieldTypeDropDown.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
