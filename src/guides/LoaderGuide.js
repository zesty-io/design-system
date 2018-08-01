import React, { Component } from 'react'

import '../../core/src/Loader/Loader.less'
import { Loader } from '../../core/src/Loader'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class LoaderGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A loading indicator for inline use</p>
        <Loader />
        <br />
        <CollapsibleCard header="Usage and Code">
          <GithubEmbed
            height="275px"
            url="https://gist.githubusercontent.com/grantglidewell/d819e919e5745d1eb1dda8791a21cb57/raw/9ceba747e9763a5b845594fa437b6408c9c25b9b/Loader.js"
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
