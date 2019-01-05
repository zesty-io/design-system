import React, { Component } from "react";
import styles from "./BinaryFieldType.less";

import { ToggleButton } from "../ToggleButton";
export class BinaryFieldType extends Component {
  onChange = (name, value) => {
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, this.props.datatype);
    }
  };
  render() {
    return (
      <article className={styles.BinaryFieldType}>
        <div className={styles.BinaryFieldTypeLabel}>
          <label>
            {this.props.label}
            {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
          </label>
        </div>
        <label className={styles.switch}>
          <ToggleButton {...this.props} onChange={this.onChange} />
          <span className={styles.slider} />
        </label>
      </article>
    );
  }
}
