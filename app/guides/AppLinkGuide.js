import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { AppLink } from '@zesty-io/core/dist/AppLink'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@zesty-io/core/dist/Card'

export class AppLinkGuide extends Component {
  render() {
    return (
      <div id="Guide">
        <div id="Description">
          <h1>AppLink </h1>
          <p>A styled wrapper for the react-router Link component</p>
        </div>

        <div id="Examples">
          <Card>
            <CardHeader>
              <h2>How it looks</h2>
            </CardHeader>
            <CardContent>
              <AppLink to={`/applink`}>
                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                &nbsp;Link Text
              </AppLink>
            </CardContent>
          </Card>
        </div>

        <div id="Props">
          <Card>
            <CardHeader>
              <h2>Component Properties</h2>
            </CardHeader>
            <CardContent>
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </CardContent>
          </Card>
        </div>

        <CodeCard header="Usage" height={50} open>
          {`
<AppLink to='/applink'}>
  <i className="fa fa-pencil-square-o" aria-hidden="true" />&nbsp;Link Text
</AppLink>
`}
        </CodeCard>

        <CodeCard header="Code" height={150}>
          {`
export function AppLink(props) {
  return (
    <Link
      {...props}
      className={cx(styles.AppLink, props.className, styles[props.type])}
    >
      {props.text}
      {props.children}
    </Link>
  );
}
`}
        </CodeCard>
      </div>
    )
  }
}

// <div id="Guide">
//   <div id="Description">
//     <h1></h1>
//     <p>
//     </p>
//   </div>
//
//   <div id="Props">
//     <h2>Props</h2>
//     <ul>
//       <li>
//       </li>
//       <li>
//       </li>
//       <li>
//       </li>
//     </ul>
//   </div>
//
//   <div id="Examples">
//     <h2>Examples</h2>
//   </div>
// </div>
