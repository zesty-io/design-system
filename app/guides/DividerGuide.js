import React, { Component } from 'react'

import { Divider } from '@zesty-io/core/dist/Divider'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class DividerGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ width: '20rem', background: '#202632', padding: '2rem' }}>
          <p>A styled horizontal divider</p>
          <Divider />
          vulputate eu scelerisque felis imperdiet
          <Divider />
          pretium nibh ipsum consequat nisl
          <Divider />
          egestas sed sed risus pretium
          <Divider />
        </div>
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed height="50px" code="<Divider />" />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            height="150px"
            url="https://gist.githubusercontent.com/grantglidewell/4cac32a12982d2534be86173cd5f38c9/raw/79851b035f7bef42d8701e1b644e7239aa908a4d/Divider.js"
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
