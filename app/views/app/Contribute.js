import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@zesty-io/core/dist/Card'

export class Contribute extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Additions and Changes</h2>
        <Card style={{ maxWidth: '30rem', padding: '1rem', margin: '1rem' }}>
          <CardHeader>
            <h2>Changes:</h2>
          </CardHeader>
          <CardContent style={{ padding: '1rem' }}>
            Submit an issue with details on what changes need to be made, and on
            a branch referencing the issue number make a PR with the needed
            changes.
          </CardContent>
          <CardFooter>
            <a href="https://github.com/zesty-io/design-system/issues">
              Zesty.io Design System Issues
            </a>
          </CardFooter>
        </Card>
        <Card style={{ maxWidth: '30rem', padding: '1rem', margin: '1rem' }}>
          <CardHeader>
            <h2>Additions:</h2>
          </CardHeader>
          <CardContent>
            <ul style={{ padding: '1rem' }}>
              <li>CD into the /util directory</li>
              <li>Run `node addComponent.js`</li>
              <li>Follow the prompst</li>
              <li>Add a route in src/views/index</li>
            </ul>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/zesty-io/design-system">
              Zesty.io Design System
            </a>
          </CardFooter>
        </Card>
      </React.Fragment>
    )
  }
}
