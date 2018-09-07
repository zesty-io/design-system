import React, { Component } from 'react'

import { ColorFieldType } from '@zesty-io/core/dist/ColorFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class ColorFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Color Field Type</p>
        <p>Props: label, default</p>
        <br />
        <ColorFieldType
          label="Title Field"
          callback={value => console.log(value)}
        />
        <br />
        <ColorFieldType label="Default to Orange Field" default="#ff9920" />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="100px"
            url="https://gist.githubusercontent.com/grantglidewell/0d0a3d5ec21edd595d1a781158312f80/raw/0c3e816beea8eb37ee884a94ef5ece176bce019d/ColorFieldTypeUsage.js"
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/e5acf4d520bf43d3ff2e9ae851da5e78/raw/91884aa7a26cb1570f5ab837839480d6d01382dd/ColorFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
