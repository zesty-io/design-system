import React, { Component } from 'react'

import '../../core/src/UrlFieldType/UrlFieldType.less'
import { UrlFieldType } from '../../core/src/UrlFieldType'
import GithubEmbed from '../components/githubembed'

export class UrlFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>URL field type, validates external urls (checks for http/https)</p>
        <p>Props: label, charCount</p>
        <br />
        <UrlFieldType label="Title Field" charCount="150" />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/136c45ad86690eb1c1475d8ba4a8a7f2/raw/33e61caee36d6ceb85755913c4c87ce89ac73799/UrlFieldType.js" />
      </React.Fragment>
    )
  }
}
