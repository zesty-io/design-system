import React, { Component } from "react";
import { Input } from "../Input";
import styles from "./TextFieldType.less";

export class TextFieldType extends Component {
  constructor(props) {
    super(props);

    if (!props.name) {
      throw new Error(
        'Missing required attribute "name". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes'
      );
    }

    this.state = {
      value: props.value || ""
    };
  }
  render() {
    return (
      <label
        className={`${styles.TextFieldType} ${
          this.state.value.length > (this.props.maxLength || 150)
            ? styles.Error
            : ""
        }`}
      >
        <div className={styles.TextFieldTypeLabel}>
          <span>{this.props.label}</span>
          <span>
            {this.state.value.length}/{this.props.maxLength || 150}
          </span>
        </div>
        <Input
          {...this.props}
          type="text"
          onChange={this.onChange}
          value={this.state.value}
        />
      </label>
    );
  }
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState({ value }, () => {
      // If provided an onChange handler
      // we need to ensure we broadcast the change
      if (this.props.onChange) {
        this.props.onChange(name, value);
      }
    });
  };
}
