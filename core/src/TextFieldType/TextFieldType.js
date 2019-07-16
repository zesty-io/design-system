import React, { Component } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./TextFieldType.less";
export class TextFieldType extends Component {
  componentDidMount() {
    if (!this.props.name) {
      throw new Error(
        'Missing required attribute "name". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes'
      );
    }
  }
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    if (this.props.onChange) {
      this.props.onChange(name, value, this.props.datatype);
    }
  };
  render() {
    const valueLength =
      this.props.value && this.props.value.length ? this.props.value.length : 0;
    const maxLength = this.props.maxLength ? this.props.maxLength : 150;

    return (
      <label
        ref={this.props.innerRef}
        className={cx(
          styles.TextFieldType,
          this.props.className,
          valueLength > maxLength ? styles.Error : ""
        )}
      >
        <FieldLabel
          label={this.props.label}
          required={this.props.required}
          fieldType="text"
          maxLength={maxLength}
          valueLength={valueLength}
          tooltip={this.props.tooltip}
        />
        <Input
          type="text"
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          required={this.props.required}
          autoFocus={this.props.autofocus}
          onChange={this.onChange}
          disabled={this.props.disabled}
          error={this.props.error}
        />
        {valueLength > maxLength && (
          <span className={styles.ErrorDescription}>
            Your input is over the specified limit
          </span>
        )}
        <FieldDescription description={this.props.description} />
      </label>
    );
  }
}
