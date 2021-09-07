import React, { Component } from "react";

import { Button } from "@zesty-io/core/Button";
import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";
import GithubEmbed from "../components/githubembed";
import { Card, CardHeader, CardContent, CardFooter } from "@zesty-io/core/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cardContent = {
  display: "flex",
  justifyContent: "space-between"
};

const cardDark = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "rgb(50, 50, 50"
};

export class ButtonGuide extends Component {
  render() {
    return (
      <div id="Guide">
        <div id="Description">
          <h1>Button Component</h1>
          <p>A flexible button component</p>
        </div>

        <div id="Props">
          <Card>
            <CardHeader>
              <h2>Component Properties</h2>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  <code>kind</code>:
                  <ul>
                    <li>defaults</li>
                    <li>reversed</li>
                    <li>outlined</li>
                    <li>flat</li>
                  </ul>
                </li>
                <li>
                  <code>type</code>:
                  <ul>
                    <li>save</li>
                    <li>secondary</li>
                    <li>alt</li>
                    <li>warn</li>
                    <li>cancel</li>
                  </ul>
                </li>
                <li>
                  <code>size</code>:
                  <ul>
                    <li>small</li>
                    <li>compact</li>
                  </ul>
                </li>
                <li>
                  <code>onClick</code>: Function to handle click events. Is
                  provided the React synthetic event.
                </li>
                <li>
                  All properties are passed through to the underlying
                  <code>button</code> element. Meaning all
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Attributes">
                    standared attributes
                  </a>
                  can be used.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code={`<Button kind="" type="" size=""> Button </Button>
<Button kind="" type="" size="">  <FontAwesomeIcon icon={faSave} /> Icon Button </Button>
            `}
          />
        </CollapsibleCard>

        <div id="Examples">
          <Card>
            <CardHeader>
              <h2>How it looks Defaults </h2>
            </CardHeader>
            <CardContent style={cardContent}>
              <Button> Default Button </Button>
              <Button type="save"> Save Button </Button>
              <Button type="secondary"> Secondary Button </Button>
              <Button type="cancel"> Cancel Button </Button>
              <Button type="warn"> Warn Button </Button>
              <Button type="alt"> alt Button </Button>

              <Button disabled={true}> Disabled Button </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2>How it looks Reversed </h2>
            </CardHeader>
            <CardContent style={cardDark}>
              <Button kind="reversed"> Reversed Button </Button>
              <Button kind="reversed" type="save">
                Save Button
              </Button>
              <Button kind="reversed" type="secondary">
                Secondary Button
              </Button>
              <Button kind="reversed" type="cancel">
                Cancel Button
              </Button>
              <Button kind="reversed" type="warn">
                Warn Button
              </Button>
              <Button kind="reversed" type="alt">
                alt Button
              </Button>

              <Button kind="reversed" disabled={true}>
                Disabled outlined Button
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2>How it looks Outlined </h2>
            </CardHeader>
            <CardContent style={cardContent}>
              <Button kind="outlined"> Outlined Button </Button>
              <Button kind="outlined" type="save">
                Save Button
              </Button>
              <Button kind="outlined" type="secondary">
                Secondary Button
              </Button>
              <Button kind="outlined" type="cancel">
                Cancel Button
              </Button>
              <Button kind="outlined" type="warn">
                Warn Button
              </Button>
              <Button kind="outlined" type="alt">
                alt Button
              </Button>

              <Button kind="outlined" disabled={true}>
                Disabled outlined Button
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2>How it looks Flat </h2>
            </CardHeader>
            <CardContent style={cardContent}>
              <Button kind="flat"> Outlined Button </Button>
              <Button kind="flat" type="save">
                Save Button
              </Button>
              <Button kind="flat" type="secondary">
                Secondary Button
              </Button>
              <Button kind="flat" type="cancel">
                Cancel Button
              </Button>
              <Button kind="flat" type="warn">
                Warn Button
              </Button>
              <Button kind="flat" type="alt">
                alt Button
              </Button>

              <Button kind="flat" disabled={true}>
                Disabled outlined Button
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2>Size </h2>
            </CardHeader>
            <CardContent style={cardContent}>
              <Button size="small"> Small Button </Button>
              <Button size="compact"> Compact Button </Button>
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
    );
  }
}
