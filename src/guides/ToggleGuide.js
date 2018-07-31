import React, { Component } from 'react'

import '../../core/src/Toggle/Toggle.less'
import { Toggle } from '../../core/src/Toggle'
import GithubEmbed from '../components/githubembed'

export class ToggleGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A toggle component that works as a checkbox</p>
        <br />
        <p>normal</p>
        <Toggle onChange={() => console.log('changed')} />
        <p>default checked</p>
        <Toggle defaultChecked={true} />
        <br />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/35d6d51fa2e534cddeef16175abbc879/raw/5cad4b5ba4d73ea1c93b2d0414d2f830ebe2e433/Toggle.js" />
      </React.Fragment>
    )
  }
}
