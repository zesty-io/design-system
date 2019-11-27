import React, { Component } from 'react'

import { FieldTypeUrl } from '@zesty-io/core/FieldTypeUrl'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'

export class FieldTypeUrlGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>URL field type, validates external urls (checks for http/https)</p>
        <p>Props: label, charCount</p>
        <br />
        <FieldTypeUrl
          default="https://www.defaultURL.com"
          callback={console.log}
          label="Title Field"
          charCount="150"
        />
        <br />
        <FieldTypeUrl
          default="https://www.defaultURL.com"
          callback={console.log}
          label="No Charcount"
          description="This is my description text"
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`<FieldTypeUrl 
  default="https://www.defaultURL.com" 
  callback={console.log} 
  label="Title Field" 
  charCount="150" 
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/136c45ad86690eb1c1475d8ba4a8a7f2/raw/33e61caee36d6ceb85755913c4c87ce89ac73799/FieldTypeUrl.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
