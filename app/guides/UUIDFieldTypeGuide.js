import React, { Component } from 'react'

import { UUIDFieldType } from '@zesty-io/core/dist/UUIDFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class UUIDFieldTypeGuide extends Component {
  state = {
    value: ''
  }
  onChange = (name, value, dataType) => {
    this.setState({ value })
  }
  render() {
    return (
      <React.Fragment>
        <p>URL field type, validates external urls (checks for http/https)</p>
        <p>Props: label, charCount</p>
        <br />
        <UUIDFieldType
          name="uuidField"
          label="UUID field type"
          value={this.state.value}
          onChange={this.onChange}
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`<UrlFieldType 
  default="https://www.defaultURL.com" 
  callback={console.log} 
  label="Title Field" 
  charCount="150" 
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/136c45ad86690eb1c1475d8ba4a8a7f2/raw/33e61caee36d6ceb85755913c4c87ce89ac73799/UrlFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
