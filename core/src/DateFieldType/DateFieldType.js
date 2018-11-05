import React, { Component } from "react";
// import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
// import moment from "moment";
import cx from "classnames";

import Flatpickr from "react-flatpickr";

require("flatpickr/dist/themes/light.css");
import styles from "./DateFieldType.less";

export class DateFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.default || new Date()
    };
  }
  onChange = date => {
    if (this.props.onChange) {
      this.props.onChange(this.props.name, date, this.props.datatype);
    }
    this.setState({ date });

    /*
    Outside of this component we don't know how this timestamp will be dealt
    with so instead of emmiting a moment object we resolve a string and push
    the moment instaniation to the `DatePicker` component
    */
    // const dateStr = m.clone().format();
    // this.setState({ date: dateStr }, () => {
    //   if (this.props.onChange) {
    //     this.props.onChange(this.props.name, dateStr, this.props.datatype);
    //   }
    // });
  };
  render() {
    const { date } = this.state;
    return (
      <label className={styles.DateFieldType}>
        <span className={styles.DateFieldTypeLabel}>{this.props.label}</span>
        <span className={styles.DateFieldTypeInput}>
          <i className={cx(styles.Icon, "fa fa-calendar")} />
          {this.props.datatype === "datetime" ? (
            <Flatpickr
              data-enable-time
              className={cx(styles.DatePicker, this.props.className)}
              name={this.props.name}
              value={date}
              onChange={this.onChange}
            />
          ) : (
            <Flatpickr
              className={cx(styles.DatePicker, this.props.className)}
              name={this.props.name}
              value={date}
              onChange={this.onChange}
            />
          )}

          {/* <input
            className={cx(styles.DatePicker, this.props.className)}
            type={this.props.type || "date"}
            name={this.props.name}
            onChange={this.onChange}
            value={this.props.default || ""}
          /> */}
        </span>
      </label>
    );
  }
}
