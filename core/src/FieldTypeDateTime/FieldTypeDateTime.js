import React from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button";
import { FieldDescription } from "../FieldDescription";
import { FieldLabel } from "../FieldLabel";

import styles from "./DateTimeFieldType.less";
export class FieldTypeDateTime extends React.PureComponent {
  onChange = evt => {
    if (this.props.onChange) {
      this.props.onChange(
        evt.target.value,
        this.props.name,
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
            type={this.props.type }
            onChange={this.onChange}
          />
          <Button className={styles.Icon}>
            <FontAwesomeIcon icon={faCalendar} />
          </Button>
        </span>

        <FieldDescription description={this.props.description} />
      </label>
    );
  }
}
