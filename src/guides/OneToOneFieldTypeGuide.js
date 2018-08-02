import React, { Component } from 'react'

import '../../core/src/Select/Select.less'
import { OneToOneFieldType } from '../../core/src/OneToOneFieldType'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class OneToOneFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Dropdown Field Type</p>
        <p>Props: options(array of objects), label</p>
        <br />
        <OneToOneFieldType
          label="Label Field"
          options={[
            { value: 'a value that can be used in some way', text: 'hi' },
            { value: 'a value that can be used in some way', text: 'hello' },
            {
              value: 'a value that can be used in some way',
              text: 'buenos dias'
            },
            { value: 'a value that can be used in some way', text: 'good day' }
          ]}
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="300px"
            code={`
<OneToOneFieldType
  label="Label Field"
  options={[
    { value: 'a value that can be used in some way', text: 'hi' },
    { value: 'a value that can be used in some way', text: 'hello' },
    {
      value: 'a value that can be used in some way',
      text: 'buenos dias'
    },
    { value: 'a value that can be used in some way', text: 'good day' }
  ]}
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed
            code={`export class OneToOneFieldType extends Component {
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
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
