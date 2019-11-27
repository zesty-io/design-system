import React, { Component } from 'react'

import { Input } from '@zesty-io/core/Input'
import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class InputGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Input</h1>

          <h2>Props</h2>
          <p>name, required, autoComplete, placeholder</p>

          <h2>Examples</h2>

          <h3>Placeholder</h3>
          <Input name="example1" placeholder="Input with placeholder text" />

          <h3>Preset Value</h3>
          <Input
            name="example2"
            type="email"
            autoComplete="off"
            value="developers@zesty.io"
          />

          <h3>Disabled</h3>
          <Input name="example3" value="Disabled field" disabled />

          <h3>Error</h3>
          <Input
            name="example3"
            value="Input error"
            error="Description of error"
          />
        </div>

        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code='<Input
              name="name"
              autocomplete="off"
              placeholder="Name (autocomplete disabled)"
            />'
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
