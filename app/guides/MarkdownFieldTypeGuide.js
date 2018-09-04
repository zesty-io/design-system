import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { MarkdownFieldType } from '@zesty-io/core/dist/MarkdownFieldType'

export class MarkdownFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <MarkdownFieldType
          default={`# Level 1 Header (H1)
## Level 2 Header (H2)
##### Level 5 Header (H5)`}
        />
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
