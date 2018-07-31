import React, { Component } from 'react'

import '../../core/src/Button/Button.less'
import { Button } from '../../core/src/Button'
import GithubEmbed from '../components/githubembed'

export class ButtonGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          A flexible button component with styles including warn, cancel, and
          save
        </p>
        <p>Button takes a type and text attribute</p>
        <br />
        <p>type = '', text='button'</p>
        <Button type="" text="Button" />
        <br />
        <p>type = 'save', text='Save'</p>
        <Button type="save" text="Save" />
        <br />
        <p>type = 'cancel', text='Cancel'</p>
        <Button type="cancel" text="Cancel" />
        <br />
        <p>type = 'warn', text='Warn'</p>
        <Button type="warn" text="Warn" />
        <br />
        <p>type = 'alt', text='Alt'</p>
        <Button type="alt" text="Alt" />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/fbf64f9eafed4dcedd16a0b0adbc3efe/raw/2e6466ac44df42fdf73e3e14a2ea87fbf1a71e10/Button.js" />
      </React.Fragment>
    )
  }
}
