import React, { Component } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import moment from "moment";
import cx from "classnames";

import styles from "./DateFieldType.less";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
// import "react-datepicker/dist/react-datepicker.css";

export class DateFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(props.value)
    };
  }
  onChange = m => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        m.clone().format(),
        this.props.datatype
      );
    }
    this.setState({ date: m });
  };
  render() {
    return (
      <label className={styles.DateFieldType}>
        <span className={styles.DateFieldTypeLabel}> {this.props.label}</span>
        <span className={styles.DateFieldTypeInput}>
          <i className={cx(styles.Icon, "fa fa-calendar")} />
          <DatePicker
            {...this.props}
            className={cx(styles.DatePicker, this.props.className)}
            onChange={this.onChange}
            selected={this.state.date}
            yearDropdownItemNumber={15}
            dateFormat="LLL"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </span>
      </label>
    );
  }
}
