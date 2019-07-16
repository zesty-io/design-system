import React, { Component } from "react";
import cx from "classnames";

import Flatpickr from "react-flatpickr";
import confirmDatePlugin from "flatpickr/dist/plugins/confirmDate/confirmDate";
import { FieldDescription } from "../FieldDescription";
import { FieldLabel } from "../FieldLabel";

require("../flatpickr.css");

import styles from "./DateFieldType.less";
export class DateFieldType extends Component {
  onChange = date => {
    if (this.props.onChange) {
      this.props.onChange(this.props.name, date[0], this.props.datatype);
    }
  };

  render() {
    return (
      <label className={cx(styles.DateFieldType, this.props.className)}>
        <FieldLabel
          label={this.props.label}
          required={this.props.required}
          tooltip={this.props.tooltip}
          fieldType="date"
        />

        <span className={styles.DateFieldTypeInput}>
          {this.props.datatype === "datetime" ? (
            <Flatpickr
              data-enable-time
              className={cx(styles.DatePicker, this.props.className)}
              name={this.props.name}
              value={this.props.value}
              onChange={this.onChange}
              options={{
                altFormat: "F j Y, at h:i K",
                altInput: true,
                plugins: [
                  new confirmDatePlugin({
                    confirmIcon: "<i class='fa fa-check'></i>",
                    confirmText: "CONFIRM ",
                    showAlways: false,
                    theme: "light"
                  })
                ]
              }}
            />
          ) : (
            <Flatpickr
              className={cx(styles.DatePicker, this.props.className)}
              name={this.props.name}
              value={this.props.value}
              onChange={this.onChange}
            />
          )}
          <i className={cx(styles.Icon, "fa fa-calendar")} />
        </span>

        {this.props.description && (
          <FieldDescription description={this.props.description} />
        )}
      </label>
    );
  }
}
