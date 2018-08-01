import React, { Component } from 'react'

import '../../core/src/ColorFieldType/ColorFieldType.less'
import { ColorFieldType } from '../../core/src/ColorFieldType'
import GithubEmbed from '../components/githubembed'

export class ColorFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Color Field Type</p>
        <p>Props: label, default</p>
        <br />
        <ColorFieldType label="Title Field" />
        <br />
        <ColorFieldType label="Default to Orange Field" default="#ff9920" />
        <br />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/e5acf4d520bf43d3ff2e9ae851da5e78/raw/ec970b8026cc9d760e9a1396aab5d51e12af2526/ColorFieldType.js" />
      </React.Fragment>
    )
  }
}
