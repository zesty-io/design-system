import React, { Component } from "react";
import { Input } from "../Input";
import styles from "./NumberFieldType.less";

export class NumberFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.value || ""
    };
  }

  onChange = evt => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        evt.target.value,
        this.props.datatype
      );
    }
    this.setState({
      number: evt.target.value
    });
  };

  render() {
    return (
      <label className={styles.NumberFieldType}>
        <span className={styles.NumberFieldTypeLabel}>{this.props.label}</span>
        <Input
          type="number"
          onChange={this.onChange}
          value={this.state.number}
        />
      </label>
    );
  }
}
