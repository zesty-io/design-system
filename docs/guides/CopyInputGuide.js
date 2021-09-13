import React, { Component } from "react";

import { CopyInput } from "@zesty-io/core/CopyInput";

import GithubEmbed from "../components/githubembed";
import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";
import { Card, CardHeader, CardContent, CardFooter } from "@zesty-io/core/Card";


export class CopyInputGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="Guide">
          <div id="Description">
            <h1>Copy Input Component</h1>
          </div>
        </div>

        <div id="Examples">
          <Card>
            <CardHeader>
              <h2>How it looks</h2>
            </CardHeader>
            <CardContent>
              <CopyInput value={"Hello Zesty"}></CopyInput>
              <br />
            </CardContent>
          </Card>
        </div>

        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="100px"
            code={`<CopyInput value={props.example}}/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            height="550px"
            url="https://gist.githubusercontent.com/d88naimi/af0bf026f985007ebefbf928a6f7be78/raw/e273ce92bd6688df53ec961650889c6aaaf26d7a/CopyInput.js"
          />
        </CollapsibleCard>
      </React.Fragment>
    );
  }
}
