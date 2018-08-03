import React, { Component } from 'react'

import { Select, Option } from '../Select'

export class OneToManyFieldType extends Component {
  state = {
    selectedOption: this.props.options[0],
    options: this.props.options
  }
  render() {
    const { selectedOption } = this.state
    return (
      <article>
        <div>
          <label>{this.props.label}</label>
        </div>
        <Select
          onSelect={this.selectOption}
          selection={{
            value: JSON.stringify(selectedOption),
            text: selectedOption.text
          }}>
          {this.state.options.map((opt, i) => {
            return (
              <Option key={i} value={JSON.stringify(opt)} text={opt.text} />
            )
          })}
        </Select>
      </article>
    )
  }

  selectOption = evt => {
    this.setState({
      selectedOption: JSON.parse(evt.currentTarget.dataset.value)
    })
  }
}
