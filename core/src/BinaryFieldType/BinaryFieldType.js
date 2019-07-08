import React, { Component } from "react";
import cx from "classnames";

import { ToggleButton } from "../ToggleButton";

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
        <p className={styles.BinaryFieldTypeLabel}>
          <label>
            {this.props.label}
            {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
          </label>
        </p>
        <p className={styles.Description}>{this.props.description}</p>
        <div className={styles.switch}>
          <ToggleButton {...this.props} onChange={this.onChange} />
          <span className={styles.slider} />
        </div>
      </article>
    );
  }
}
