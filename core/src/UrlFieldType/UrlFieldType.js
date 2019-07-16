import React, { PureComponent } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./UrlFieldType.less";
export class UrlFieldType extends PureComponent {
  onChange = evt => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        evt.target.value,
        this.props.datatype
      );
    }
  };

  render() {
    return (
      <article
        className={cx(
          styles.UrlFieldType,
          this.props.className,
          this.props.maxLength && this.props.value.length > this.props.maxLength
            ? styles.Error
            : null
        )}
      >
        <FieldLabel
          label={this.props.label}
          required={this.props.required}
          fieldType="url"
          maxLength={this.props.maxLength}
          valueLength={(this.props.value && this.props.value.length) || "0"}
          tooltip={this.props.tooltip}
        />
        <Input
          type="url"
          required={this.props.required}
          onChange={this.onChange}
          value={this.props.value}
        />
        {this.props.description && (
          <FieldDescription description={this.props.description} />
        )}
      </article>
    );
  }
}
