import React, { Component } from 'react'

import { Input } from '@zesty-io/core/dist/Input'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
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

          <h3>Default</h3>
          <Input name="example1" />

          <h3>autocomplete</h3>
          <Input
            name="example2"
            type="email"
            placeholder="autocomplete disabled"
            autocomplete="off"
          />

          <h3>required</h3>
          <Input name="example3" placeholder="required" required />
        </div>

        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code="<Input
              name=&quot;name&quot;
              autocomplete=&quot;off&quot;
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
