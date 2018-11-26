import React, { Component } from "react";
import cx from "classnames";

import styles from "./DateTimeFieldType.less";
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
      <label className={styles.DateFieldType}>
        <span className={styles.DateFieldTypeLabel}>{this.props.label}</span>
        <span className={styles.DateFieldTypeInput}>
          <i className={cx(styles.Icon, "fa fa-calendar")} />
          <input
            className={cx(styles.DatePicker, this.props.className)}
            type={this.props.type || "datetime-local"}
            onChange={this.onChange}
          />
          {/*<DatePicker
            {...this.props}
            className={cx(styles.DatePicker, this.props.className)}
            onChange={this.onChange}
            selected={this.state.date ? moment(this.state.date) : null}
            yearDropdownItemNumber={15}
            dateFormat="LLL"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />*/}
        </span>
      </label>
    );
  }
}
