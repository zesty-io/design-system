import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Flatpickr from "react-flatpickr";
import confirmDatePlugin from "flatpickr/dist/plugins/confirmDate/confirmDate";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

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
      <label className={styles.DateFieldType}>
        <span className={styles.DateFieldTypeLabel}>
          {this.props.label}
          {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
        </span>
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
                  // new rangePlugin()
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
      </label>
    );
  }
}
