import React, { Component } from "react";

import { SearchableList, Option } from "../SearchableList";
import { Tag } from "../Tag";

import styles from "./OneToManyFieldType.less";

export class OneToManyFieldType extends Component {
  static defaultProps = {
    options: [
      {
        text: "there were no options passed to <Select>",
        value: "no options passed to select"
      }
    ]
  };
  state = {
    selectedOption: this.props.options[0],
    options: this.props.options,
    tags: []
  };
  componentDidMount() {
    // fetch existing tags from API
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <article>
        <div>
          <label>{this.props.label}</label>
        </div>
        <SearchableList onSelect={this.selectOption}>
          {this.state.options.map((opt, i) => {
            return (
              <Option key={i} value={JSON.stringify(opt)} text={opt.text} />
            );
          })}
        </SearchableList>
        {this.state.tags.map(tag => (
          <Tag tagName={tag.name} tagZUID={tag.ZUID} />
        ))}
      </article>
    );
  }

  selectOption = evt => {
    this.setState({
      selectedOption: JSON.parse(evt.currentTarget.dataset.value)
    });
  };
}
