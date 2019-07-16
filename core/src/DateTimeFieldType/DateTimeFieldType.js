import React, { Component } from "react";
import cx from "classnames";

import styles from "./DateTimeFieldType.less";
import { FieldDescription } from "../FieldDescription";
import { FieldLabel } from "../FieldLabel";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'

export class DateTimeFieldType extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     date: moment()
  //   }
  // }
  // componentDidMount() {
  //   if (this.props.value) {
  //     this.setState({
  //       date: moment(this.props.value)
  //     })
  //   }
  // }
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
    return (
      <label className={cx(styles.DateFieldType, this.props.className)}>
        <FieldLabel
          label={this.props.label}
          required={this.props.required}
          fieldType="datetime"
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

        {this.props.description && (
          <FieldDescription description={this.props.description} />
        )}
      </label>
    );
  }
}
