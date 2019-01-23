import React, { Component } from 'react'

import { TextFieldType } from '@zesty-io/core/dist/TextFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class TextFieldTypeGuide extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <h1>TextFieldType</h1>
        <p>
          Text field for manager app. Uses a text input and passes through all
          provided properties. This means all{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes">
            standard input attributes
          </a>{' '}
          can be used.
        </p>

        <h2>Props</h2>

        <h3>name (required)</h3>
        <p>This is a required property used to identify the field</p>

        <h3>value</h3>
        <p>If no value is provided a default of an empty string is used</p>

        <h3>onChange</h3>
        <p>
          Function to invoke whenever the field value changes. Will be provided
          2 arguemnts[name, value]
        </p>

        <h3>label</h3>
        <p>Custom label to display</p>

        <h3>charCount</h3>
        <p>Custom character count to display</p>
        <br />

        <h2>Examples</h2>
        <TextFieldType
          label="Title Field"
          name="example1"
          datatype="text"
          placeholder="placeholder text"
          value={this.state.example1}
          onChange={(name, value) => this.setState({ [name]: value })}
        />

        <TextFieldType
          label="Custom Length"
          name="example2"
          maxLength="400"
          required={true}
          value={this.state.example2}
          onChange={(name, value) => this.setState({ [name]: value })}
        />

        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code='<TextFieldType label="Title Field" maxLength="150" />'
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/e8aef5e2bb966e3bd87a616630cc39b2/raw/edbf2bc3d1ae9ccaba8d4c90e6b369e44780b422/TextFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
