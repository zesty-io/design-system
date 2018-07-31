import React, { Component } from 'react'

import '../../core/src/WithLoader/WithLoader.less'
import { WithLoader } from '../../core/src/WithLoader'
import GithubEmbed from '../components/githubembed'

export class WithLoaderGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A loading indicator that renders children once condition is met</p>
        <p>
          takes optional height and width props, Boolean must be passed for
          condition.
        </p>
        <WithLoader height="200px" />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/1c165d3fdbe818f9a94183c6d8464cab/raw/576868b0e3a1078c48bef86ac9fabc80d2e8957a/WithLoader.js" />
      </React.Fragment>
    )
  }
}
