import React, { Component } from 'react'

import { Toggle } from '@zesty-io/core/dist/Toggle'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class ToggleGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A toggle component that works as a checkbox</p>
        <br />
        <p>normal</p>
        <Toggle onChange={() => console.log('changed')} />
        <p>default checked</p>
        <Toggle defaultChecked={true} />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code="<Toggle onChange={() => console.log('changed')} defaultChecked={true} />"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/35d6d51fa2e534cddeef16175abbc879/raw/61ddd04835ffca64cf93034925fac50006b8b5c9/Toggle.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
