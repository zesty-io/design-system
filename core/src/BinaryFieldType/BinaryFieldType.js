import React, { Component } from "react";
import styles from "./BinaryFieldType.less";

import { ToggleButton } from "../ToggleButton";
import { Label } from "../Label";
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
          <Label {...this.props} />
        </div>
        <div className={styles.switch}>
          <ToggleButton {...this.props} onChange={this.onChange} />
          <span className={styles.slider} />
        </div>
      </article>
    );
  }
}
