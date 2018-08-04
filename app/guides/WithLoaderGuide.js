import React, { Component } from 'react'

import '../../core/src/WithLoader/WithLoader.less'
import { WithLoader } from '../../core/src/WithLoader'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class WithLoaderGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A loading indicator that renders children once condition is met</p>
        <p>
          takes optional height and width props, Boolean must be passed for
          condition.
        </p>
        <WithLoader height="200px" />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="100px"
            url="https://gist.githubusercontent.com/grantglidewell/9c32e983a1fdd9377adfcb60bde363c3/raw/4f0038b096a8bf7bcd129e1e7ad452a4a6396d78/WithLoaderUsage.js"
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/1c165d3fdbe818f9a94183c6d8464cab/raw/4f13978220defee3cec724bc0d850c0be05a9f51/WithLoader.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
