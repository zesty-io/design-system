import React from "react";
import cx from "classnames";

import styles from "./DateTimeFieldType.less";
import { FieldDescription } from "../FieldDescription";
import { FieldLabel } from "../FieldLabel";

export class FieldTypeDateTime extends React.PureComponent {
  onChange = evt => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        evt.target.value,
        this.props.datatype
      );
    }
  };
  render() {
    console.log("DateTimeFieldType:render");

    return (
      <label className={cx(styles.DateFieldType, this.props.className)}>
        <FieldLabel
          label={this.props.label}
          required={this.props.required}
          tag={this.props.tag}
          tooltip={this.props.tooltip}
        />

        <span className={styles.DateFieldTypeInput}>
          <input
            className={cx(styles.DatePicker, this.props.className)}
            type={this.props.type || "datetime-local"}
            onChange={this.onChange}
          />
          <i className={cx(styles.Icon, "fa fa-calendar")} />
        </span>

        <FieldDescription description={this.props.description} />
      </label>
    );
  }
}
