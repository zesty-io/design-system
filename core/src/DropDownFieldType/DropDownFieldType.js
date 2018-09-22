import React, { Component } from "react";
import { Select, Option } from "../Select";
import styles from "./DropDownFieldType.less";

export class DropDownFieldType extends Component {
  static defaultProps = {
    options: [
      {
        text: "No options provided",
        value: ""
      }
    ],
    searchLength: 50
  };

  state = {
    selectedOption: this.props.options[0],
    options: this.props.options
  };

  selectOption = evt => {
    const value = JSON.parse(evt.currentTarget.dataset.value);
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, this.props.datatype);
    }
    this.setState({
      selectedOption: this.state.options.find(opt => opt.value === value)
    });
  };

  render() {
    return (
      <label className={styles.DropDownFieldType}>
        <span className={styles.DropDownFieldTypeLabel}>
          {this.props.label}
        </span>
        <Select
          onSelect={this.selectOption}
          selection={{
            value: JSON.stringify(this.state.selectedOption.value),
            text: this.state.selectedOption.text
          }}
        >
          {this.state.options.map((opt, i) => {
            return (
              <Option
                key={i}
                value={JSON.stringify(opt.value)}
                text={opt.text}
                className={opt.className}
              />
            );
          })}
        </Select>
      </label>
    );
  }
}
