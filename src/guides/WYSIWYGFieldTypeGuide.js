import React, { Component } from 'react'

import { WYSIWYGFieldType } from '../../core/src/WYSIWYGFieldType'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class WYSIWYGFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A WYSIWYG (Tiny MCE) component</p>
        <br />
        <p>normal</p>
        <WYSIWYGFieldType />
        <br />
        <br />
        {/* <CollapsibleCard header="Usage">
          <GithubEmbed
            height="50px"
            code="<Toggle onChange={() => console.log('changed')} defaultChecked={true} />"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/35d6d51fa2e534cddeef16175abbc879/raw/61ddd04835ffca64cf93034925fac50006b8b5c9/Toggle.js" />
        </CollapsibleCard> */}
      </React.Fragment>
    )
  }
}
