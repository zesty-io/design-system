import React, { Component, Fragment } from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from '@zesty-io/core/dist/Card'

export class AtomsGuide extends Component {
  render() {
    return (
      <Fragment>
        <h2>Zesty Atoms</h2>
        <div
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <Card style={{ maxWidth: '30rem', padding: '1rem', margin: '1rem' }}>
            <CardHeader>
              <h2>Concept</h2>
            </CardHeader>
            <CardContent style={{ padding: '1rem' }}>
              This concept of atomic design is commonly known through the
              writings of Brad Frost.{' '}
              <a href="http://bradfrost.com/blog/post/atomic-web-design/#atoms">
                Atoms
              </a>{' '}
              stand on their own as components, but combined can create powerful
              molecules.
            </CardContent>
            <CardFooter>
              <a href="https://github.com/zesty-io/design-system">
                Zesty.io Design System Repository
              </a>
            </CardFooter>
          </Card>
          <Card style={{ maxWidth: '30rem', padding: '1rem', margin: '1rem' }}>
            <CardHeader>
              <h2>Standards:</h2>
            </CardHeader>
            <CardContent style={{ padding: '1rem' }}>
              Atoms in Zesty Design system follow a single purpose pattern, this
              means if the component is interactive, it is only responsible for
              one action (handling only one callback). If more interactions are
              necessary, you are creating a Molecule or an Organism.
              <div style={{ padding: '1rem' }}>
                <code>callback(data)</code>
                <ul style={{ padding: '1rem' }}>
                  <li>data: returns the updated value</li>
                </ul>
              </div>
              Code should comply with base{' '}
              <a href="https://github.com/prettier/prettier">Prettier</a>{' '}
              standards as well as{' '}
              <a href="https://www.npmjs.com/package/eslint-config-airbnb">
                Eslint Airbnb React
              </a>{' '}
              <a href="https://github.com/airbnb/javascript/tree/master/react">
                guidelines
              </a>
              .
            </CardContent>
            <CardFooter>
              <a href="https://github.com/zesty-io/design-system">
                Zesty.io Design System
              </a>
            </CardFooter>
          </Card>
          <Card style={{ maxWidth: '30rem', padding: '1rem', margin: '1rem' }}>
            <CardHeader>
              <h2>Exporting:</h2>
            </CardHeader>
            <CardContent style={{ padding: '1rem' }}>
              Atoms in Zesty Design system can have multiple exports if they are
              designed to work together. For this reason we use named exports as
              seen below.
            </CardContent>
            <CardFooter>
              <pre>{`export { Card, CardHeader, CardContent, CardFooter } from "./Card";`}</pre>
            </CardFooter>
          </Card>
        </div>
      </Fragment>
    )
  }
}
