import React, { Component } from 'react'

import '../../core/src/DateFieldType/DateFieldType.less'
import { DateFieldType } from '../../core/src/DateFieldType'
import GithubEmbed from '../components/githubembed'

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
        <DateFieldType label="Format Date" dateFormat="YYYY/MM/DD" />
        <DateFieldType label="Format to LL" dateFormat="LL" />
        <DateFieldType label="Title Field" />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/e814bd7f2e9178f455dca1d3302b42b3/raw/143fe66dc0605f1b9a6327a32bf089ed2e3c45bf/DateFiledType.js" />
      </React.Fragment>
    )
  }
}
