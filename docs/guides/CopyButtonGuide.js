import React, { Component } from "react";

import { CopyButton } from "@zesty-io/core/CopyButton";

import GithubEmbed from "../components/githubembed";
import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";
import { Card, CardHeader, CardContent, CardFooter } from "@zesty-io/core/Card";


export class CopyButtonGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="Guide">
          <div id="Description">
            <h1>Copy Button Component</h1>
            <p>A flexible copy button that can copy text or text fields</p>
          </div>
        </div>

        <div id="Examples">
          <Card>
            <CardHeader>
              <h2>How it looks</h2>
            </CardHeader>
            <CardContent>
              <CopyButton value={"Hello Zesty"}></CopyButton>
              <br />
            </CardContent>
          </Card>
        </div>

        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code="
            <CopyButton value={props.example}} />"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            height="750px"
            url="https://gist.githubusercontent.com/d88naimi/5974ba306e5756704b6f73e07302054c/raw/936877280ce9f7dc36d5b54eb78192b9880b4cb1/CopyButton.js"
          />
        </CollapsibleCard>
      </React.Fragment>
    );
  }
}
