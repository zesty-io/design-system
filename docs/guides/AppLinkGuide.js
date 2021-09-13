import React, { Component } from "react";

import { CodeCard } from "../components/CodeCard";
import { AppLink } from "@zesty-io/core/AppLink";
import { Card, CardHeader, CardContent, CardFooter } from "@zesty-io/core/Card";
import GithubEmbed from "../components/githubembed";
import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";

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

        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            height="350px"
            url="https://gist.githubusercontent.com/d88naimi/d45e9933e97b956bc963b5258677c7f4/raw/8f93e3b016e828ec69904b71ef10abc2ed648a8b/AppLink.hs"
          />
        </CollapsibleCard>
      </div>
    );
  }
}
