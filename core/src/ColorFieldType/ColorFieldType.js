import React, { Component } from "react";
import cx from "classnames";

import { Input } from "../Input";

import styles from "./ColorFieldType.less";
export class ColorFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || "#ffffff"
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
      value: evt.target.value
    });
  };
  render() {
    return (
      <label className={cx(styles.ColorFieldType, this.props.className)}>
        <span className={styles.ColorFieldTypeLabel}>
          {this.props.label}
          {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
        </span>
        <div className={styles.ColorFieldTypeInput}>
          <Input
            required={this.props.required}
            type="color"
            onChange={this.onChange}
            value={this.state.value}
            className={styles.ColorInput}
          />
          <i className={cx(styles.Icon, "fa fa-paint-brush")} />
        </div>
      </label>
    );
  }
}
