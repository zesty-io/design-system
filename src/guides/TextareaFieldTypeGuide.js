import React, { Component } from 'react'

import '../../core/src/TextareaFieldType/TextareaFieldType.less'
import { TextareaFieldType } from '../../core/src/TextareaFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'

export class TextareaFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Textarea field for manager app that allows custom character limit</p>
        <p>Props: label, charCount</p>
        <br />
        <TextareaFieldType label="Title Field" charCount="350" />
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed
            height="50px"
            code="<TextareaFieldType label=&quot;Title Field&quot; charCount=&quot;350&quot; />"
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/b2ef988a3cf77f2b75b2acca064c075e/raw/ae4b0498d44dd2cab0e893b308aaa62d27db67fb/TextareaFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
