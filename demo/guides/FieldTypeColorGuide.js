import React, { Component } from 'react'

import { FieldTypeColor } from '@zesty-io/core/FieldTypeColor'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'

export class FieldTypeColorGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Color Field Type</p>
        <p>Props: label, default</p>
        <br />
        <FieldTypeColor
          required
          tooltip="Dont be a tooltip!"
          label="Title Field"
          onChange={value => console.log(value)}
        />
        <br />
        <FieldTypeColor
          label="Default to Orange Field"
          value="#ff9920"
          description="Pick a pretty color... test description"
        />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="100px"
            url="https://gist.githubusercontent.com/grantglidewell/0d0a3d5ec21edd595d1a781158312f80/raw/0c3e816beea8eb37ee884a94ef5ece176bce019d/FieldTypeColorUsage.js"
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/e5acf4d520bf43d3ff2e9ae851da5e78/raw/91884aa7a26cb1570f5ab837839480d6d01382dd/FieldTypeColor.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
