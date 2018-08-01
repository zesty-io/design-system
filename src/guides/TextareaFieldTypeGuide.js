import React, { Component } from 'react'

import '../../core/src/TextareaFieldType/TextareaFieldType.less'
import { TextareaFieldType } from '../../core/src/TextareaFieldType'
import GithubEmbed from '../components/githubembed'

export class TextareaFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Textarea field for manager app that allows custom character limit</p>
        <p>Props: label, charCount</p>
        <br />
        <TextareaFieldType label="Title Field" charCount="350" />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/b2ef988a3cf77f2b75b2acca064c075e/raw/ae4b0498d44dd2cab0e893b308aaa62d27db67fb/TextareaFieldType.js" />
      </React.Fragment>
    )
  }
}
