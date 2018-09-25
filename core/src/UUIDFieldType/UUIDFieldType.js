import React, { PureComponent } from "react";
import cx from "classnames";
import { Input } from "../Input";
import styles from "./UUIDFieldType.less";

export class UUIDFieldType extends PureComponent {
  render() {
    return (
      <label className={styles.UUIDFieldType}>
        <div className={styles.UUIDFieldTypeLabel}>
          <span>{this.props.label}</span>
        </div>
        <div className={styles.DateFieldTypeInput}>
          <i
            className={cx(styles.Icon, "fa fa-clipboard")}
            aria-hidden="true"
          />
          <Input
            type="text"
            readOnly={true}
            defaultValue={this.props.value || ""}
          />
        </div>
      </label>
    );
  }
}
