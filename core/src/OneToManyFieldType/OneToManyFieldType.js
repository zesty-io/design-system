import React, { Component } from 'react'

import { SearchableList, Option } from '../SearchableList'
import { Tag } from '../Tag'

import styles from './OneToManyFieldType.less'

export class OneToManyFieldType extends Component {
  state = {
    selectedOption: this.props.options[0],
    options: this.props.options,
    tags: []
  }
  componentDidMount() {
    // fetch existing tags from API
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
        {this.state.tags.map(tag => (
          <Tag tagName={tag.name} tagZUID={tag.ZUID} />
        ))}
      </article>
    )
  }

  selectOption = evt => {
    this.setState({
      selectedOption: JSON.parse(evt.currentTarget.dataset.value)
    })
  }
}
