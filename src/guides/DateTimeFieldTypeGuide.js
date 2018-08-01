import React, { Component } from 'react'

import '../../core/src/DateTimeFieldType/DateTimeFieldType.less'
import { DateTimeFieldType } from '../../core/src/DateTimeFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'

export class DateTimeFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Date field type</p>
        <br />
        <a href="https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md">
          See full props for React-Date-Picker
        </a>
        <br />
        <br />
        <DateTimeFieldType label="Title Field" />
        <DateTimeFieldType label="Title Field" timeFormat="HH:mm:ss" />
        <br />
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed
            height="150px"
            code={`
<DateTimeFieldType label="Title Field" />
<DateTimeFieldType label="Title Field" timeFormat="HH:mm:ss" />`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/8dfe4f38dbaba5cedf418054c49a5fe1/raw/fa2d95806cce31072ef96116af6922cc66e559fd/DateTimeFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
