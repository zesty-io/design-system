import React, { Component } from "react";

import { Input } from "../Input";

import styles from "./UrlFieldType.less";
export class UrlFieldType extends Component {
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
        className={`${styles.UrlFieldType} ${
          textInput.length > this.props.charCount ? styles.Error : ""
        }`}
      >
        <div className={styles.UrlFieldTypeLabel}>
          <label>{this.props.label}</label>
          <span>
            {textInput.length}/{this.props.charCount}
          </span>
        </div>
        <Input type="url" onChange={this.onChange} value={textInput} />
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
