import React, { Component } from 'react'

import { FieldTypeTextarea } from '@zesty-io/core/FieldTypeTextarea'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'

export class FieldTypeTextareaGuide extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <h1>Textarea Fieldtype</h1>

        <h2>Props</h2>
        <p>label, charCount, onChange</p>

        <br />
        <FieldTypeTextarea
          name="example1"
          placeholder="placeholder text"
          value={this.state.example1}
          onChange={(value, name) => this.setState({ [name]: value })}
          label="Title Field"
          charCount="350"
        />
        <br />
        <FieldTypeTextarea
          name="example2"
          placeholder="placeholder text"
          required={true}
          value={this.state.example2}
          onChange={(value, name) => this.setState({ [name]: value })}
          label="No CharCount prop"
          description="This is my description text"
          tooltip="tooltip is rocking out"
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`<FieldTypeTextarea
            name="example1"
            placeholder="placeholder text"
            value={this.state.example1}
            onChange={(value, name) => this.setState({ [name]: value })}
            label="Title Field"
            charCount="350"
          />
          <br />
          <FieldTypeTextarea
            name="example2"
            placeholder="placeholder text"
            required={true}
            value={this.state.example2}
            onChange={(value, name) => this.setState({ [name]: value })}
            label="No CharCount prop"
          />`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/b2ef988a3cf77f2b75b2acca064c075e/raw/ae4b0498d44dd2cab0e893b308aaa62d27db67fb/FieldTypeTextarea.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
