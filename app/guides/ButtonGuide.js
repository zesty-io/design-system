import React, { Component } from 'react'

import { Button } from '@zesty-io/core/dist/Button'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class ButtonGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          A flexible button component with styles including warn, cancel, and
          save
        </p>
        <p>Button takes a type and text attribute</p>
        <br />
        <Button type="" text="Button" />
        <br />
        <Button type="save" text="Save" />
        <br />
        <Button type="cancel" text="Cancel" />
        <br />
        <Button type="warn" text="Warn" />
        <br />
        <Button type="alt" text="Alt" />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="100px"
            url="https://gist.githubusercontent.com/grantglidewell/f37c2bc1f6835705a34c8063b9b62374/raw/3621e09110a652def2348452a56c91cdc4765891/ButtonUsage.js"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/fbf64f9eafed4dcedd16a0b0adbc3efe/raw/2e6466ac44df42fdf73e3e14a2ea87fbf1a71e10/Button.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
