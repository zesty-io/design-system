import React, { Component } from 'react'

import { DateTimeFieldType } from '@zesty-io/core/dist/DateTimeFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

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
        <DateTimeFieldType required label="Title Field" />
        <br />
        <DateTimeFieldType
          label="Title Field"
          timeFormat="HH:mm:ss"
          description="This is my description"
        />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
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
