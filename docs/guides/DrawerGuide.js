import React, { Component, Fragment } from 'react'
import GithubEmbed from "../components/githubembed";

import { CodeCard } from '../components/CodeCard'
import { Drawer, DrawerHandle, DrawerContent } from '@zesty-io/core/Drawer'
import { Card, CardHeader, CardContent, CardFooter } from '@zesty-io/core/Card'
import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";

export class DrawerGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Drawer Component</h1>
        <p>
          A flexible Drawer component that can be placed top, right, bottom,
          left in the viewport.{" "}
        </p>
        <Drawer position="right" offset="46px">
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

        <CodeCard
          header="Usage"
          height={250}
          open
          children={`<Drawer position="right" offset="46px">
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
</Drawer>`}
        />

        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            height="750px"
            url="https://gist.githubusercontent.com/d88naimi/0037b4418a5e672d5723a7011c4fdccb/raw/8d63d3b40d40019f0ce4b30b360b74210e73c39e/Drawer.js"
          />
        </CollapsibleCard>
      </React.Fragment>
    );
  }
}
