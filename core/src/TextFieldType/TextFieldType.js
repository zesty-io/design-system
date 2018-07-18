import React, { Component } from "react";

import { Input } from "../Input";

import styles from "./TextFieldType.less";
export class TextFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
      // lengthError: false
    };
  }
  render() {
    const { textInput } = this.state;
    return (
      <article
        className={`${styles.TextFieldType} ${
          textInput.length > this.props.charCount ? styles.Error : ""
        }`}
      >
        <div className={styles.TextFieldTypeLabel}>
          <label>{this.props.label}</label>
          <span>
            {textInput.length}/{this.props.charCount}
          </span>
        </div>
        <Input type="text" onChange={this.onChange} value={textInput} />
      </article>
    );
  }
  onChange = evt => {
    this.setState({
      textInput: evt.target.value
      // lengthError: evt.target.value.length > this.props.charCount
    });
  };
}
