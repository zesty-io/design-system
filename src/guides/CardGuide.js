import React, { Component } from 'react'

import '../../core/src/Button/Button.less'
import '../../core/src/Card/Card.less'

import { Card, CardHeader, CardContent, CardFooter } from '../../core/src/Card'
import { Button } from '../../core/src/Button'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class CardGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          Cards are universal use display components, they respond well to grid
          and flex systems that have their boundaries clearly drawn.
        </p>
        <Card>
          <CardHeader>This is the card Header</CardHeader>
          <CardContent>this is the card content</CardContent>
          <CardFooter>this is the card footer</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h1>A Large Card Title</h1>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardContent>
          <CardFooter
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: '1rem'
            }}>
            <Button type="save" text="save" />
            <Button type="cancel" text="cancel" />
          </CardFooter>
        </Card>
        <Card style={{ maxWidth: '20rem' }}>
          <CardHeader>
            <h1>A Restricted Card</h1>
          </CardHeader>
          <CardContent>
            Some size restriction goes a long way with cards, they are flex
            based so the can grow and shrink according to their use
          </CardContent>
          <CardFooter>footer</CardFooter>
        </Card>
        <h1>These cards are in a flex container</h1>
        <section style={{ display: 'flex' }}>
          <Card>
            <CardHeader>This is the card Header</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardFooter>this is the card footer</CardFooter>
          </Card>
          <Card>
            <CardHeader>This is the card Header</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardFooter>this is the card footer</CardFooter>
          </Card>
          <Card>
            <CardHeader>This is the card Header</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardFooter>this is the card footer</CardFooter>
          </Card>
        </section>
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed
            height="300px"
            url="https://gist.githubusercontent.com/grantglidewell/00ccd5777a49f7536abc2e051a608846/raw/98fbcc28d6c459c04cea14c4f26f10c211655389/CardUsage.js"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/23644d42f165474ff8ebd5333b30247a/raw/7569b8b0aa2b7ee997ecacd6df89123cf4391f63/Card.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
