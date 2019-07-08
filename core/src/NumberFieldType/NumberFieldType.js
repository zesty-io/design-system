import React, { Component } from "react";
import cx from "classnames";

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
      <label className={cx(styles.NumberFieldType, this.props.className)}>
        <p className={styles.NumberFieldTypeLabel}>
          {this.props.label}
          {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
        </p>

        <p className={styles.Description}>{this.props.description}</p>

        <Input
          type="number"
          required={this.props.required}
          onChange={this.onChange}
          value={this.state.number}
        />
      </label>
    );
  }
}
