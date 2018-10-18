import React, { Component } from "react";
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
      <label className={styles.DropDownFieldType}>
        <span className={styles.DropDownFieldTypeLabel}>
          {this.props.label}
        </span>
        <Select
          name={this.props.name}
          onSelect={this.onSelect}
          selection={this.props.selection}
          default={this.props.default}
        >
          {this.props.options.map((opt, i) => {
            return <Option key={i} {...opt} />;
          })}
        </Select>
      </label>
    );
  }
}
