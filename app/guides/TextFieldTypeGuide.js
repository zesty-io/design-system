import React, { Component } from 'react'

import '@zesty-io/core/dist/TextFieldType/TextFieldType.less'
import { TextFieldType } from '@zesty-io/core/dist/TextFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class TextFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Text field for manager app that allows custom character limit</p>
        <p>Props: label, charCount</p>
        <br />
        <TextFieldType label="Title Field" charCount="150" />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code="<TextFieldType label=&quot;Title Field&quot; charCount=&quot;150&quot; />"
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/e8aef5e2bb966e3bd87a616630cc39b2/raw/edbf2bc3d1ae9ccaba8d4c90e6b369e44780b422/TextFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
