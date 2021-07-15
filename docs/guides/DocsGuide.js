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
              Docs with a subject prop
              <br/>
              <Docs subject="content models"/>
              Docs with direct url, url will override subject, but subject will still be used in the 
              <br/>
              <Docs subject="ZUID Specificaion" url="https://zesty-io.github.io/zuid-specification/" />
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
                  <code>subject</code> the subject of the documentation search to pass to zesty.org e.g. models, parsley etc.
                </li>
                <li>
                  <code>url</code> creates a link to the url
                </li>
               
              </ul>
            </CardContent>
          </Card>
        </div>

  
      <CollapsibleCard header="Usage" open>
        <GithubEmbed
          height="100px"
          url="https://gist.githubusercontent.com/ardeay/e9044a0080d4f1488fa2f0cc5e05e20b/raw/d6a41be595f30db8f7bfb292da049ea1d0381787/docs.js"
        />
      </CollapsibleCard>
 
      </div>
    )
  }
}
