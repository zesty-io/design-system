import React, { Component } from 'react'

import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class CollapsibleCardGuide extends Component {
  render() {
    // defaults
    return (
      <React.Fragment>
        <p>Collapsible Card</p>
        <p>
          Props: header (string), collapsed (boolean), CHILDREN (rendered as
          body), footer (string optional)
        </p>
        <br />
        <CollapsibleCard header="Collapse Me" footer="this is a footer">
          <p>This is the body</p>
        </CollapsibleCard>
        <CollapsibleCard header="Default Collapsed" collapsed>
          <h3>Pass JSX or a component!</h3>
        </CollapsibleCard>
        <br />
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed
            height="200px"
            url="https://gist.githubusercontent.com/grantglidewell/c76897c3d3b3077ef8871dc17bff8c52/raw/bd1df9690953c3d638cb44a5bdcf68303cf90a7f/CollapsibleCardUse.js"
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/829489093e0abf71f5b3a77d96332158/raw/30b0310cea64fda2b736c9c862a72a9fdc85f586/CollapsibleCard.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
