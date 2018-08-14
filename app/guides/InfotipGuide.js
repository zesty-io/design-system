import React, { Component } from 'react'

import '@zesty-io/core/dist/Infotip/Infotip.less'
import { Infotip } from '@zesty-io/core/dist/Infotip'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class InfotipGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Mouseover for more information</p>
        <p>Use prop title for the message</p>
        <Infotip title="This is the Infotip title" />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code="<Infotip title=&quot;This is the Infotip title&quot; />"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/bbb2144f9f11204dc7ee4f9ee39b94b0/raw/87242583267c8d5d8d63c5ff4db504f6eaa723c8/Infotip.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
