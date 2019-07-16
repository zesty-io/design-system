import React, { Component } from "react";
import cx from "classnames";

import { Select, Option } from "../Select";
import { FieldDescription } from "../FieldDescription";
import { FieldLabel } from "../FieldLabel";

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
        <FieldLabel
          label={this.props.label}
          required={this.props.required}
          fieldType="dropdown"
          tooltip={this.props.tooltip}
        />

        <Select
          name={this.props.name}
          loading={this.props.loading}
          value={this.props.value || "0"}
          onSelect={this.onSelect}
        >
          <Option
            value={this.props.defaultOptValue || "0"}
            text={this.props.defaultOptText || "— None —"}
          />
          {this.props.children
            ? this.props.children
            : this.props.options.map((opt, i) => {
                return <Option key={i} {...opt} />;
              })}
        </Select>

        {this.props.description && (
          <FieldDescription description={this.props.description} />
        )}
      </label>
    );
  }
}
