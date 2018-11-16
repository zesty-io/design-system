import React, { Component } from "react";
import { Textarea } from "../Textarea";
import styles from "./TextareaFieldType.less";

/**
 * Controlled component
 */
export class TextareaFieldType extends Component {
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
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({ value }, () => {
      if (this.props.onChange) {
        this.props.onChange(name, value, this.props.datatype);
      }
    });
  };
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
          name={this.props.name}
          value={this.state.value}
          onChange={this.onChange}
        />
      </article>
    );
  }
}
