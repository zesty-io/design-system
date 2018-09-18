import React, { Component } from 'react'

import { TextareaFieldType } from '@zesty-io/core/dist/TextareaFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class TextareaFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Textarea Fieldtype</h1>

        <h2>Props</h2>
        <p>label, charCount, onChange</p>

        <br />
        <TextareaFieldType
          name="example1"
          value="testing default"
          onChange={console.log}
          label="Title Field"
          charCount="350"
        />
        <br />
        <TextareaFieldType
          name="example2"
          value="testing default"
          onChange={console.log}
          label="No CharCount prop"
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`<TextareaFieldType
  default="testing default"
  onChange={console.log}
  label="Title Field"
  charCount="350"
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/b2ef988a3cf77f2b75b2acca064c075e/raw/ae4b0498d44dd2cab0e893b308aaa62d27db67fb/TextareaFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
