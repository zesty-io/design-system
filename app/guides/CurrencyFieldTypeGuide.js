import React, { Component } from 'react'

import { CurrencyFieldType } from '@zesty-io/core/dist/CurrencyFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@zesty-io/core/dist/Card'

export class CurrencyFieldTypeGuide extends Component {
  render() {
    return (
      <div id="Guide">
        <div id="Description">
          <h1>Currency Component</h1>
          <p />
        </div>

        <div id="Examples">
          <Card>
            <CardHeader>
              <h2>How it looks</h2>
            </CardHeader>
            <CardContent>
              <CurrencyFieldType
                label="Custom Label"
                code="CAD"
                value="10.00"
                onChange={value => console.log(value)}
                name="required"
              />
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
                <li>
                  <code>code</code>: The kind of button to render; save, cancel,
                  warn, alt. When not provided renders a default button.
                </li>
                <li>
                  <code>value</code>: Function to handle click events. Is
                  provided the React synthetic event.
                </li>
                <li />
              </ul>
            </CardContent>
          </Card>
        </div>

        {/*
      <CollapsibleCard header="Usage" open>
        <GithubEmbed
          height="100px"
          url="https://gist.githubusercontent.com/grantglidewell/f37c2bc1f6835705a34c8063b9b62374/raw/3621e09110a652def2348452a56c91cdc4765891/ButtonUsage.js"
        />
      </CollapsibleCard>
      <CollapsibleCard collapsed header="Code">
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/fbf64f9eafed4dcedd16a0b0adbc3efe/raw/2e6466ac44df42fdf73e3e14a2ea87fbf1a71e10/Button.js" />
      </CollapsibleCard>
      */}
      </div>
    )
  }
}

// <React.Fragment>
//   <p>Currency Field Type</p>
//   <p>Props: label, default</p>
//   <br />
//   <CurrencyFieldType
//     label="Title Field"
//     callback={value => console.log(value)}
//     default="CAD"
//   />
//   <br />
//   <br />
//   <CollapsibleCard header="Usage" open>
//     <GithubEmbed
//       height="50px"
//       code="<CurrencyFieldType label=&quot;Title Field&quot; callback={value => console.log(value)} default=&quot;CAD&quot; />"
//     />
//   </CollapsibleCard>
//   <CollapsibleCard header="Code" collapsed>
//     <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/f3f51ba99632d7f583f0a615e3a59500/raw/5812e40da4556ad254bd2ce17857121a769dd08a/CurrencyFieldType.js" />
//   </CollapsibleCard>
// </React.Fragment>
