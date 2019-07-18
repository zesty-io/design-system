import React, { Component } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./ColorFieldType.less";
export class ColorFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || "#ffffff"
    };
  }
  onChange = evt => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        evt.target.value,
        this.props.datatype
      );
    }
    this.setState({
      value: evt.target.value
    });
  };
  render() {
    return (
      <label className={cx(styles.ColorFieldType, this.props.className)}>
        <FieldLabel
          label={this.props.label}
          required={this.props.required}
          tag={this.props.tag}
          tooltip={this.props.tooltip}
        />

        <div className={styles.ColorFieldTypeInput}>
          <Input
            required={this.props.required}
            type="color"
            onChange={this.onChange}
            value={this.state.value}
            className={styles.ColorInput}
          />
          <i className={cx(styles.Icon, "fa fa-paint-brush")} />
        </div>

        <FieldDescription description={this.props.description} />
      </label>
    );
  }
}
