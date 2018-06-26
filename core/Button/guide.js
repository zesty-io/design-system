import React, { Component } from 'react'

import Button from './Button'

export default class ButtonGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <Button type="" text="Button" />
        <Button type="save" text="Save" />
        <Button type="cancel" text="Cancel" />
        <Button type="warn" text="Warn" />
        <Button type="alt" text="Alt" />
      </React.Fragment>
    )
  }
}

