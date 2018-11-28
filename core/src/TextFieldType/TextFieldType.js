import React, { Component } from "react";
import { Input } from "../Input";
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
    this.props.onChange &&
      this.props.onChange(name, value, this.props.datatype);
  };
  render() {
    const { value, label, maxLength } = this.props;
    return (
      <label
        className={`${styles.TextFieldType} ${
          (value && value.length) > (maxLength || 150) ? styles.Error : ""
        }`}
      >
        <div className={styles.TextFieldTypeLabel}>
          <span>{label}</span>
          <span>
            {(value && value.length) || "0"}/{maxLength || 150}
          </span>
        </div>
        <Input {...this.props} type="text" onChange={this.onChange} />
        {(value && value.length) > (maxLength || 150) ? (
          <span className={styles.ErrorDescription}>
            Your input is over the specified limit
          </span>
        ) : null}
      </label>
    );
  }
}
