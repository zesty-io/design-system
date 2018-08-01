import React, { Component } from 'react'

import '../../core/src/CurrencyFieldType/CurrencyFieldType.less'
import { CurrencyFieldType } from '../../core/src/CurrencyFieldType'
import GithubEmbed from '../components/githubembed'

export class CurrencyFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Currency Field Type</p>
        <p>Props: label, default</p>
        <br />
        <CurrencyFieldType label="Title Field" default="CAD" />
        <br />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/f3f51ba99632d7f583f0a615e3a59500/raw/a8d6b2dcc962912f53b4b06e3a61d0243c0aca60/CurrencyFieldType.js" />
      </React.Fragment>
    )
  }
}
