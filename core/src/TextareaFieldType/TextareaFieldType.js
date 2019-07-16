import React, { Component } from "react";
import cx from "classnames";

import { Textarea } from "../Textarea";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

/**
 * Controlled component
 */
import styles from "./TextareaFieldType.less";
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
    const { value, label, maxLength, required } = this.props;
    return (
      <label
        className={cx(
          styles.TextareaFieldType,
          this.props.className,
          (value && value.length) > (maxLength || 150) ? styles.Error : ""
        )}
      >
        <FieldLabel
          label={label}
          required={required}
          fieldType="textarea"
          maxLength={maxLength || 150}
          valueLength={(value && value.length) || "0"}
        />

        <Textarea {...this.props} type="textarea" onChange={this.onChange} />
        {this.props.description && (
          <FieldDescription description={this.props.description} />
        )}
      </label>
    );
  }
}
