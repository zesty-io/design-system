import React, { Component } from 'react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@zesty-io/core/dist/Card'

export class FieldTypesGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>FieldType components</h2>
        <Card style={{ maxWidth: '30rem', padding: '1rem', margin: '1rem' }}>
          <CardHeader>
            <h2>Usage:</h2>
          </CardHeader>
          <CardContent style={{ padding: '1rem' }}>
            Describe the overall function signature and use case for field
            types. also rethinking the function signature to return an object
            with the same keys (value, name, id) would be a better developer
            experience
          </CardContent>
          <CardFooter>
            <a href="https://github.com/zesty-io/design-system/issues">
              Zesty.io Design System Issues
            </a>
          </CardFooter>
        </Card>
        <Card style={{ maxWidth: '30rem', padding: '1rem', margin: '1rem' }}>
          <CardHeader>
            <h2>Function Signature:</h2>
          </CardHeader>
          <CardContent>
            Field Types return the following function signature
            <div>
              <code>callback(name, value, dataype)</code>
              <ul style={{ padding: '1rem' }}>
                <li>name: the name of the field </li>
                <li>value: updated value from the field</li>
                <li>datatype: datatype specified in the field object</li>
              </ul>
            </div>
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
