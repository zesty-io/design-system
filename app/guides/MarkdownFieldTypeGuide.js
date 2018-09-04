import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { MarkdownFieldType } from '@zesty-io/core/dist/MarkdownFieldType'

export class MarkdownFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>description</p>
        //render example of the component
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
