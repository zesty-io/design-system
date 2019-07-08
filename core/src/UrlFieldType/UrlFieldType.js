import React, { PureComponent } from "react";
import cx from "classnames";

import { Input } from "../Input";

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
        <p className={styles.UrlFieldTypeLabel}>
          <label>
            {this.props.label}
            {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
          </label>
          {this.props.maxLength && (
            <span>
              {this.props.value.length}/{this.props.maxLength}
            </span>
          )}
        </p>

        <p className={styles.Description}>{this.props.description}</p>

        <Input
          type="url"
          required={this.props.required}
          onChange={this.onChange}
          value={this.props.value}
        />
      </article>
    );
  }
}
