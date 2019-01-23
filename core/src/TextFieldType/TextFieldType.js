import React, { Component } from "react";
import cx from "classnames";

import { Input } from "../Input";

import styles from "./TextFieldType.less";
import { Label } from "../Label";
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
        className={cx(
          styles.TextFieldType,
          this.props.className,
          valueLength > maxLength ? styles.Error : ""
        )}
      >
        <div className={styles.TextFieldTypeLabel}>
          <Label {...this.props} />
          <span>
            {valueLength}/{maxLength}
          </span>
        </div>
        <Input
          // {...this.props}
          type="text"
          name={this.props.name}
          value={this.props.value}
          required={this.props.required}
          onChange={this.onChange}
        />
        {valueLength > maxLength && (
          <span className={styles.ErrorDescription}>
            Your input is over the specified limit
          </span>
        )}
      </label>
    );
  }
}
