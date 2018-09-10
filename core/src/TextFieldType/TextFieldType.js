import React, { Component } from "react";

import { Input } from "../Input";

import styles from "./TextFieldType.less";
export class TextFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: this.props.default || ""
    };
  }
  render() {
    const { textInput } = this.state;
    return (
      <article
        className={`${styles.TextFieldType} ${
          this.props.charCount && textInput.length > this.props.charCount
            ? styles.Error
            : ""
        }`}
      >
        <div className={styles.TextFieldTypeLabel}>
          <label>{this.props.label}</label>
          {this.props.charCount && (
            <span>
              {textInput.length}/{this.props.charCount}
            </span>
          )}
        </div>
        <Input type="text" onChange={this.onChange} value={textInput} />
      </article>
    );
  }
  onChange = evt => {
    this.setState({
      textInput: evt.target.value
    });
    if (this.props.callback) {
      this.props.callback(evt.target.value);
    }
  };
}
