import React, { Component } from 'react'

import { Button } from '@zesty-io/core/dist/Button'
import { CodeCard } from '../components/CodeCard'
import { ConfirmDialog } from '@zesty-io/core/dist/ConfirmDialog'

export class ConfirmDialogGuide extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <React.Fragment>
        <p>description</p>
        <Button onClick={() => this.setState({ isOpen: true })}>
          Open Confirm
        </Button>
        <ConfirmDialog
          isOpen={this.state.isOpen}
          prompt="Is it safe to go alone?"
          callback={response => {
            this.setState({ isOpen: false })
            console.log(response)
          }}
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
