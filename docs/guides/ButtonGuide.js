import React, { Component } from 'react'

import { Button } from '@zesty-io/core/Button'
// import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'
// import GithubEmbed from '../components/githubembed'
import { Card, CardHeader, CardContent, CardFooter } from '@zesty-io/core/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export class ButtonGuide extends Component {
  render() {
    return (
      <div id="Guide">
        <div id="Description">
          <h1>Button Component</h1>
          <p>
            A flexible button component with predefined "kind" including warn,
            cancel, and save
          </p>
        </div>

        <div id="Examples">
          <Card>
            <CardHeader>
              <h2>How it looks</h2>
            </CardHeader>
            <CardContent>
              <Button>Default Button</Button>
              <br />
              <Button kind="save">Save Button</Button>
              <br />
              <Button kind="save" size="small">Save Button</Button>

              <br />
              <Button kind="secondary">
              <FontAwesomeIcon icon={faPlus} />
                Secondary Button</Button>
              <br />
              <Button kind="secondary" size="small">
                <FontAwesomeIcon icon={faPlus} />
                Secondary Button
                </Button>
                <br />
              <Button kind="subdued">Subdued</Button>
              <br />
              <Button kind="outlined">Outlined</Button>
              <br />
              <Button kind="cancel">Cancel Button</Button>
              <br />
              <Button kind="warn">Warn Button</Button>
              <br />
              <Button kind="alt">Alt Button</Button>
              <br />
              <Button disabled={true}>Disabled Button</Button>
              <br />
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
                  <code>kind</code>: The kind of button to render; save, cancel,
                  warn, alt. When not provided renders a default button.
                  <ul>
                    <li>outlined</li>
                    <li>subdued</li>
                    <li>warm</li>
                    <li>alt</li>
                    <li>cancel</li>
                    <li>secondary</li>
                    <li>save</li>
                  </ul>
                </li>
                <li>
                  <code>size="small"</code>: reduced overall size of the button
                  <ul>
                    <li>small</li>
                  </ul>
                </li>
                <li>
                  <code>onClick</code>: Function to handle click events. Is
                  provided the React synthetic event.
                </li>
                <li>
                  All properties are passed through to the underlying{' '}
                  <code>button</code> element. Meaning all{' '}
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Attributes">
                    standared attributes
                  </a>{' '}
                  can be used.
                </li>
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
