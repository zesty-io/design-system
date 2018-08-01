import React, { Component } from 'react'

import '../../core/src/DateTimeFieldType/DateTimeFieldType.less'
import { DateTimeFieldType } from '../../core/src/DateTimeFieldType'
import GithubEmbed from '../components/githubembed'

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
        <DateTimeFieldType label="Title Field" timeFormat="LL" />
        <br />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/8dfe4f38dbaba5cedf418054c49a5fe1/raw/fe43a1487fad46de11bf8f2d93fe5a198453836f/DateTimeFieldType.js" />
      </React.Fragment>
    )
  }
}
