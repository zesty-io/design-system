import React, { PureComponent } from "react";
import cx from "classnames";
import { Input } from "../Input";
import styles from "./UUIDFieldType.less";
import uuidv4 from "uuid/v4";

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
      <label className={styles.UUIDFieldType}>
        <div className={styles.UUIDFieldTypeLabel}>
          <span>{this.props.label}</span>
        </div>
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
            defaultValue={this.props.value || ""}
          />
        </div>
      </label>
    );
  }
}
