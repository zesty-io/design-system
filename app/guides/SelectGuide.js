import React, { Component } from 'react'

import '@zesty-io/core/dist/Select/Select.less'
import { Select, Option } from '@zesty-io/core/dist/Select'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class SelectGuide extends Component {
  state = {
    value: 'Initial message',
    text: 'Initial'
  }
  render() {
    return (
      <React.Fragment>
        <p>
          The Select component requires that you also import the Option
          component to nest inside of it for each option. It takes an onSelect
          prop.
        </p>
        <p>
          Props: selection (Obj with keys: value, text), onSelect (function),
          searchLength (Number, default is 50)
        </p>
        <br />
        <Select
          selection={{ value: this.state.value, text: this.state.text }}
          onSelect={this.handleSelect}>
          <Option key="1" value="1" text="Selection 1" />
          <Option key="2" value="2" text="Selection 2" />
          <Option key="3" value="3" text="Selection 3" />
        </Select>
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/40660e7462eaa0bc3a697a44d7e8c98e/raw/680b9ad84879be931ba83107cd43760ee0231448/SelectGuide.js" />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/79dee4371e549ae899cdae4d52af7682/raw/2f6484863850ef68e7fb1d64904d25c52daecee7/Select.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
  handleSelect = evt => {
    this.setState({
      value: evt.target.dataset.value,
      text: evt.target.dataset.text
    })
  }
}
