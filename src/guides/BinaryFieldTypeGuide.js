import React, { Component } from 'react'

import '../../core/src/BinaryFieldType/BinaryFieldType.less'
import { BinaryFieldType } from '../../core/src/BinaryFieldType'
import GithubEmbed from '../components/githubembed'

export class BinaryFieldTypeGuide extends Component {
  render() {
    // defaults
    return (
      <React.Fragment>
        <p>Binary Field Type for manager app</p>
        <p>Props: label, trueValue, falseValue, defaultChecked, disabled</p>
        <br />
        <BinaryFieldType label="Default Values" />
        <br />
        <BinaryFieldType
          label="Custom Values"
          trueValue="Affirmative"
          falseValue="Negative"
        />
        <br />
        <BinaryFieldType
          label="Default to true"
          defaultChecked={true}
          trueValue="Fast"
          falseValue="Slow"
        />
        <br />
        <BinaryFieldType
          disabled
          label="Disabled"
          trueValue="Fast"
          falseValue="Slow"
        />
        <br />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/aea22e948944049f09a91844e8e7644e/raw/c30ba4eea733abd816e1803d4e54f7b7917fbbaf/BinaryFieldType.js" />
      </React.Fragment>
    )
  }
}
