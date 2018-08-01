import React, { Component } from 'react'

import '../../core/src/TextFieldType/TextFieldType.less'
import { TextFieldType } from '../../core/src/TextFieldType'
import GithubEmbed from '../components/githubembed'

export class TextFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Text field for manager app that allows custom character limit</p>
        <p>Props: label, charCount</p>
        <br />
        <TextFieldType label="Title Field" charCount="150" />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/e8aef5e2bb966e3bd87a616630cc39b2/raw/edbf2bc3d1ae9ccaba8d4c90e6b369e44780b422/TextFieldType.js" />
      </React.Fragment>
    )
  }
}
