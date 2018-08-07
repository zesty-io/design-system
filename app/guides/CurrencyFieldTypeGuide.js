import React, { Component } from 'react'

import '@zesty-io/core/dist/CurrencyFieldType/CurrencyFieldType.less'
import { CurrencyFieldType } from '@zesty-io/core/dist/CurrencyFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class CurrencyFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Currency Field Type</p>
        <p>Props: label, default</p>
        <br />
        <CurrencyFieldType label="Title Field" default="CAD" />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code="<CurrencyFieldType label=&quot;Title Field&quot; default=&quot;CAD&quot; />"
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/f3f51ba99632d7f583f0a615e3a59500/raw/5812e40da4556ad254bd2ce17857121a769dd08a/CurrencyFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
