import React, { Component } from 'react'

import '../../core/src/Input/Input.less'
import { Input } from '../../core/src/Input'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class InputGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>Input component with zesty styling</p>
          <p>Props: name, required, autoComplete, placeholder</p>
          <Input name="name" placeholder="Name" />
          <Input
            name="name"
            autoComplete="off"
            placeholder="Name (autocomplete disabled)"
          />
          <Input required placeholder="required" />
          <Input placeholder="placeholder" />
          <Input />
        </div>
        <br />
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed
            height="50px"
            code="<Input
              name=&quot;name&quot;
              autoComplete=&quot;off&quot;
              placeholder=&quot;Name (autocomplete disabled)&quot;
            />"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Usage and Code">
          <GithubEmbed
            height="400px"
            url="https://gist.githubusercontent.com/grantglidewell/6f18bcb18ef81edaa179f0ad4bfbff9e/raw/6e838538910a4e100a7cef0b8114c8f547397d38/Input.js"
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
