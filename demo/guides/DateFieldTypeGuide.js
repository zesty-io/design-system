import React, { Component } from 'react'

import { DateFieldType } from '@zesty-io/core/DateFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'

export class DateFieldTypeGuide extends Component {
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
        <DateFieldType
          label="Format Date"
          name="dateTimePicker"
          future
          required
          onChange={console.log}
          datatype={'datetime'}
          description="this one has a description!"
        />
        <br />
        <br />
        <DateFieldType
          label="Format Date"
          name="datepicker"
          default={new Date().toString()}
          onChange={console.log}
          datatype={'date'}
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`
<DateFieldType label="Format Date" dateFormat="YYYY/MM/DD" />
<DateFieldType label="Format to LL" dateFormat="LL" />
<DateFieldType label="Title Field" />`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/e814bd7f2e9178f455dca1d3302b42b3/raw/c589388980feb5cb82ea9b1cf8a58feb821b3f47/DateFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
