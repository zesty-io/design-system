import React, { Component } from "react";
import { Textarea } from "../Textarea";
import styles from "./TextareaFieldType.less";

/**
 * Controlled component
 */
export class TextareaFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }
  render() {
    return (
      <article
        className={`${styles.TextareaFieldType} ${
          this.props.charCount && this.state.value.length > this.props.charCount
            ? styles.Error
            : ""
        }`}
      >
        <div className={styles.TextareaFieldTypeLabel}>
          <label>{this.props.label}</label>
          {this.props.charCount && (
            <span>
              {this.state.value.length}/{this.props.charCount}
            </span>
          )}
        </div>
        <Textarea
          {...this.props}
          className={styles.TextArea}
          value={this.state.value}
        />
      </article>
    );
  }
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState({ value }, () => {
      if (this.props.onChange) {
        this.props.onChange(name, value);
      }
    });
  };
}
