import React, { Component } from 'react'

import '../../core/src/Select/Select.less'
import { DropDownFieldType } from '../../core/src/DropDownFieldType'
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
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/58a6f8bbb0f89f77bef63a745b1e9570/raw/012b70f1e05a6f983df1cb2381e6acbfdda92b73/DropDownFieldType.js" />
      </React.Fragment>
    )
  }
}
