import React, { Component } from "react";
import cx from "classnames";

import { Label } from "../Label";
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
        <Label required={this.props.required}>
          {this.props.label}{" "}
          {this.props.name && this.props.datatype && (
            <span style={{ color: "#c3cddf" }}>
              <span style={{ paddingLeft: "4px" }}>[{this.props.name}]</span>
              <span style={{ paddingLeft: "4px", padingRight: "4px" }}>
                {this.props.datatype}
              </span>
            </span>
          )}
        </Label>
        <span className={styles.DateFieldTypeInput}>
          <input
            className={cx(styles.DatePicker, this.props.className)}
            type={this.props.type || "datetime-local"}
            onChange={this.onChange}
          />
          <i className={cx(styles.Icon, "fa fa-calendar")} />
        </span>
      </label>
    );
  }
}
