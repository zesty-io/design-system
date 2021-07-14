import React, { Component } from 'react'
import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'
import { Docs } from '@zesty-io/core/Docs'
import GithubEmbed from '../components/githubembed'
import { Card, CardHeader, CardContent, CardFooter } from '@zesty-io/core/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export class DocsGuide extends Component {
  render() {
    return (
      <div id="Guide">
        <div id="Description">
          <h1>Docs Guide</h1>
          <p>
          Wraps button size small, has grey colors with orange accent icon of the book icon. It will open a link to zesty.org in target blank using the search query

 
          </p>
        </div>

        <div id="Examples">
          <Card>
            <CardHeader>
              <h2>How it looks</h2>
            </CardHeader>
            <CardContent>
              <Docs subject="content models"/>
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
                  <code>subject</code>: the subjec of the document to lookup akak content models, parsley etc.
                 
                </li>
               
              </ul>
            </CardContent>
          </Card>
        </div>

  
      <CollapsibleCard header="Usage" open>
        <GithubEmbed
          height="100px"
          url="https://gist.githubusercontent.com/ardeay/e9044a0080d4f1488fa2f0cc5e05e20b/raw/986bc9cd4eff76de5eed089f865d1b8ef82490de/gistfile1.js"
        />
      </CollapsibleCard>
 
      </div>
    )
  }
}
