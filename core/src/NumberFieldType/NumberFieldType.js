import React, { Component } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./NumberFieldType.less";
export class NumberFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.value || ""
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
      number: evt.target.value
    });
  };

  render() {
    return (
      <label className={cx(styles.NumberFieldType, this.props.className)}>
        <FieldLabel
          label={this.props.label}
          required={this.props.required}
          tag={this.props.tag}
          tooltip={this.props.tooltip}
        />

        <Input
          type="number"
          required={this.props.required}
          onChange={this.onChange}
          value={this.state.number}
        />

        {this.props.description && (
          <FieldDescription description={this.props.description} />
        )}
      </label>
    );
  }
}
