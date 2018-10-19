import React, { Component, Fragment } from 'react'

import { CodeCard } from '../components/CodeCard'
import { Drawer, DrawerHandle, DrawerContent } from '@zesty-io/core/dist/Drawer'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@zesty-io/core/dist/Card'

export class DrawerGuide extends Component {
  render() {
    return (
      <Fragment>
        <p>description</p>
        <Drawer>
          <DrawerHandle />
          <DrawerContent>
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
          </DrawerContent>
        </Drawer>
        <CodeCard header="Usage" height={250} open>
          // usage guide here
        </CodeCard>

        <CodeCard header="Code" height={250}>
          // component code here
        </CodeCard>
      </Fragment>
    )
  }
}
