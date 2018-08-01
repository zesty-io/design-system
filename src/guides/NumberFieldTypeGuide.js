import React, { Component } from 'react'

import '../../core/src/NumberFieldType/NumberFieldType.less'
import { NumberFieldType } from '../../core/src/NumberFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
export class NumberFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Number field for manager app that allows custom character limit</p>
        <p>Props: label, charCount</p>
        <br />
        <NumberFieldType label="Title Field" charCount="350" />
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed
            height="50px"
            code="<NumberFieldType label=&quot;Title Field&quot; charCount=&quot;350&quot; />"
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/b5a452420c1ddd26c0e9d29670ec2bf0/raw/8d0eb596d1185eecb4898f68da5d8f3b8f6ccbb3/NumberFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
