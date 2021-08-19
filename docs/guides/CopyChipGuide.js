import React, { Component } from "react";

import { CopyChip } from "@zesty-io/core/CopyChip";
import { Input } from "@zesty-io/core/Input";

import GithubEmbed from "../components/githubembed";
import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";
import { Card, CardHeader, CardContent, CardFooter } from "@zesty-io/core/Card";
import { FieldTypeText } from "@zesty-io/core/FieldTypeText";

export class CopyChipGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="Guide">
          <div id="Description">
            <h1>Copy Chip Component</h1>
            <p>A flexible copy button that can copy text or text fields</p>

          </div>
        </div>

        <div id="Examples">
          <Card>
            <CardHeader>
              <h2>How it looks</h2>
            </CardHeader>
            <CardContent>
              <CopyChip value={"Hello Zesty"}>Hello Zesty</CopyChip>
              <br />

            </CardContent>
          </Card>
        </div>

        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code="
            <CopyChip value={props.example}} />"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            height="750px"
            url="https://gist.githubusercontent.com/d88naimi/d5512f14f207a4e7bbeb9d2af48a04ac/raw/bc3177ba9d2d6464703d50081b3e4e835a929e9e/CopyChip.js"
          />
        </CollapsibleCard>
      </React.Fragment>
    );
  }
}
