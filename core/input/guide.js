import React, { Component } from 'react'

import Input from './Input'
export default class InputGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <Input name="name" placeholder="Name"/>
        <Input name="name" autoComplete="off" placeholder="Name (autocomplete disabled)"/>
        <Input required placeholder="required"/>
        <Input placeholder="placeholder"/>
        <Input />
      </React.Fragment>
    )
  }
}
