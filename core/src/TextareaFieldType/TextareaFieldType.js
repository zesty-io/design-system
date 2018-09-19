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
  render() {
    return (
      <article
        className={`${styles.TextareaFieldType} ${
          this.props.maxLength && this.state.value.length > this.props.maxLength
            ? styles.Error
            : ""
        }`}
      >
        <div className={styles.TextareaFieldTypeLabel}>
          <label>{this.props.label}</label>
          {this.props.maxLength && (
            <span>
              {this.state.value.length}/{this.props.maxLength}
            </span>
          )}
        </div>
        <Textarea
          // {...this.props}
          name={this.props.name}
          value={this.state.value}
          onChange={this.onChange}
        />
      </article>
    );
  }
  onChange = evt => {
    console.log("TextareaFieldType:onChange", evt.target);
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState({ value }, () => {
      if (this.props.onChange) {
        this.props.onChange(name, value);
      }
    });
  };
}
