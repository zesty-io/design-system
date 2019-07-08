import React, { PureComponent } from "react";
import cx from "classnames";
import uuidv4 from "uuid/v4";

import { Input } from "../Input";

import styles from "./UUIDFieldType.less";
export class UUIDFieldType extends PureComponent {
  componentDidMount() {
    // I may add a check to ensure the itemZUID is 'new'
    if (this.props.name && !this.props.value) {
      // there is no UUID and it needs to be generated
      this.props.onChange(this.props.name, uuidv4(), this.props.datatype);
    }
  }
  render() {
    return (
      <label className={cx(styles.UUIDFieldType, this.props.className)}>
        <p className={styles.UUIDFieldTypeLabel}>
          <span>
            {this.props.label}
            {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
          </span>
        </p>

        <p className={styles.Description}>{this.props.description}</p>

        <div className={styles.DateFieldTypeInput}>
          <i
            className={cx(styles.Icon, "fa fa-clipboard")}
            aria-hidden="true"
            onClick={e => {
              const input = document.createElement("input");
              document.body.appendChild(input);
              input.value = this.props.value;
              input.focus();
              input.select();
              const result = document.execCommand("copy");
              input.remove();
              if (result === "unsuccessful") {
                return this.props.dispatch(
                  notify({
                    type: "error",
                    message: "Failed to copy the team ID to your clipboard"
                  })
                );
              }
            }}
          />
          <Input
            type="text"
            readOnly={true}
            required={this.props.required}
            defaultValue={this.props.value || ""}
          />
        </div>
      </label>
    );
  }
}
