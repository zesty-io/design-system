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
          textInput.length > (this.props.charCount ? this.props.charCount : 150)
            ? styles.Error
            : ""
        }`}
      >
        <div className={styles.TextFieldTypeLabel}>
          <label>{this.props.label}</label>
          <span>
            {textInput.length}/
            {this.props.charCount ? this.props.charCount : 150}
          </span>
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
