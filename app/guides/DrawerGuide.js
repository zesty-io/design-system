import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { Drawer } from '@zesty-io/core/dist/Drawer'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@zesty-io/core/dist/Card'

export class DrawerGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>description</p>
        <Drawer>
          <Card>
            <CardHeader>This is the card Header</CardHeader>
            <CardContent>this is the card content</CardContent>
            <CardFooter>this is the card footer</CardFooter>
          </Card>
          <Card>
            <CardHeader>This is the card Header</CardHeader>
            <CardContent>this is the card content</CardContent>
            <CardFooter>this is the card footer</CardFooter>
          </Card>
        </Drawer>
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
