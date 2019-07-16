import React, { Component } from 'react'

import { TextareaFieldType } from '@zesty-io/core/dist/TextareaFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class TextareaFieldTypeGuide extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <h1>Textarea Fieldtype</h1>

        <h2>Props</h2>
        <p>label, charCount, onChange</p>

        <br />
        <TextareaFieldType
          name="example1"
          placeholder="placeholder text"
          value={this.state.example1}
          onChange={(name, value) => this.setState({ [name]: value })}
          label="Title Field"
          charCount="350"
        />
        <br />
        <TextareaFieldType
          name="example2"
          placeholder="placeholder text"
          required={true}
          value={this.state.example2}
          onChange={(name, value) => this.setState({ [name]: value })}
          label="No CharCount prop"
          description="This is my description text"
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`<TextareaFieldType
            name="example1"
            placeholder="placeholder text"
            value={this.state.example1}
            onChange={(name, value) => this.setState({ [name]: value })}
            label="Title Field"
            charCount="350"
          />
          <br />
          <TextareaFieldType
            name="example2"
            placeholder="placeholder text"
            required={true}
            value={this.state.example2}
            onChange={(name, value) => this.setState({ [name]: value })}
            label="No CharCount prop"
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
