import React, { Component } from 'react'

import { OneToManyFieldType } from '@zesty-io/core/dist/OneToManyFieldType'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class OneToManyFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Dropdown Field Type</p>
        <p>Props: options(array of objects), label</p>
        <br />
        <OneToManyFieldType />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed height="300px" code={`//`} />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed code={`//`} />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
