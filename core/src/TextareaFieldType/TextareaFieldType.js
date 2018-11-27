import React, { Component } from "react";
import { Textarea } from "../Textarea";
import styles from "./TextareaFieldType.less";

/**
 * Controlled component
 */
export class TextareaFieldType extends Component {
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
        className={`${styles.TextareaFieldType} ${
          (value && value.length) > (maxLength || 150) ? styles.Error : ""
        }`}
      >
        <div className={styles.TextareaFieldTypeLabel}>
          <span>{label}</span>
          <span>
            {(value && value.length) || "0"}/{maxLength || 150}
          </span>
        </div>
        <Textarea {...this.props} type="textarea" onChange={this.onChange} />
      </label>
    );
  }
}
