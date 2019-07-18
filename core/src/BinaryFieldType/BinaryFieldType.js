import React, { Component } from "react";
import cx from "classnames";

import { ToggleButton } from "../ToggleButton";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./BinaryFieldType.less";
export class BinaryFieldType extends Component {
  onChange = (name, value) => {
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, this.props.datatype);
    }
  };
  render() {
    return (
      <article className={cx(styles.BinaryFieldType, this.props.className)}>
        <label className={styles.BinaryFieldTypeLabel}>
          <FieldLabel
            label={this.props.label}
            required={this.props.required}
            tag={this.props.tag}
            tooltip={this.props.tooltip}
          />
        </label>
        <div className={styles.switch}>
          <ToggleButton {...this.props} onChange={this.onChange} />
          <span className={styles.slider} />
        </div>
        <FieldDescription description={this.props.description} />
      </article>
    );
  }
}
