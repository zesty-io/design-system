import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { InternalLinkFieldType } from '@zesty-io/core/dist/InternalLinkFieldType'

export class InternalLinkFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>description</p>
        <InternalLinkFieldType />

        <CodeCard header="Usage" height={250} open>
          // usage guide here
        </CodeCard>

        <CodeCard header="Code" height={250}>
          // component code here
        </CodeCard>
      </React.Fragment>
    )
  }
}
