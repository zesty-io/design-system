import React, { Component } from "react";

import { Select, Option } from "../Select";

export class OneToOneFieldType extends Component {
  state = {
    selectedOption: this.props.options[0],
    options: this.props.options
  };
  render() {
    const { selectedOption } = this.state;
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
          }}
        >
          {this.state.options.map((opt, i) => {
            return (
              <Option key={i} value={JSON.stringify(opt)} text={opt.text} />
            );
          })}
        </Select>
      </article>
    );
  }

  selectOption = evt => {
    if (this.props.callback) {
      this.props.callback(evt.currentTarget.dataset.value);
    }
    this.setState({
      selectedOption: JSON.parse(evt.currentTarget.dataset.value)
    });
  };
}
