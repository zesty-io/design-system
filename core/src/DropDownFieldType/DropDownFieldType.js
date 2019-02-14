import React, { Component } from "react";
import cx from "classnames";

import { Select, Option } from "../Select";

import styles from "./DropDownFieldType.less";
export class DropDownFieldType extends Component {
  onSelect = (name, value) => {
    if (this.props.onChange) {
      this.props.onChange(name, value, this.props.datatype);
    }
  };

  render() {
    return (
      <label className={cx(styles.DropDownFieldType, this.props.className)}>
        <span className={styles.DropDownFieldTypeLabel}>
          {this.props.label}
          {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
        </span>
        <Select
          name={this.props.name}
          onSelect={this.onSelect}
          name={this.props.name}
          value={this.props.value || "0"}
        >
          <Option value="0" text="— None —" />
          {this.props.children
            ? this.props.children
            : this.props.options.map((opt, i) => {
                return <Option key={i} {...opt} />;
              })}
        </Select>
      </label>
    );
  }
}
