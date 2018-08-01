import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '../../../core/src/Card'

export class Contribute extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Contributing and Additions</h2>
        <Card style={{ maxWidth: '30rem', padding: '1rem', margin: '1rem' }}>
          <CardHeader>
            <h2>Changes:</h2>
          </CardHeader>
          <CardContent>
            Make a branch and submit a PR with details on what changes need to
            be made
          </CardContent>
          <CardFooter>link to github repo</CardFooter>
        </Card>
        <Card style={{ maxWidth: '30rem', padding: '1rem', margin: '1rem' }}>
          <CardHeader>
            <h2>Additions:</h2>
          </CardHeader>
          <CardContent>
            <ul style={{ padding: '1rem' }}>
              <li>Create your component in core/src</li>
              <li>Create your Guide in src/guides</li>
              <li>Add your Guide to index.js in src/guides</li>
              <li>Add a route in src/views/index</li>
              <li>
                Add your component in the appropriate array in src/index.js
              </li>
            </ul>
          </CardContent>
          <CardFooter>link to github repo</CardFooter>
        </Card>
      </React.Fragment>
    )
  }
}
