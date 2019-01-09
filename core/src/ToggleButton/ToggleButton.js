import React, { PureComponent } from "react";
import cx from "classnames";

import styles from "./ToggleButton.less";
export class ToggleButton extends PureComponent {
  onClick = evt => {
    evt.stopPropagation();
    evt.preventDefault();

    this.props.onChange(
      this.props.name,
      this.props.value == 1 ? 0 : 1,
      this.props.datatype
    );
  };

  /**
    @props this.props.value 0:No 1:Yes
  **/
  render() {
    return (
      <button
        className={styles.ToggleButton}
        onClick={this.onClick}
        disabled={this.props.disabled}
      >
        <span
          className={cx(
            styles.default,
            styles.off,
            this.props.value == 0 ? styles.Selected : ""
          )}
        >
          {this.props.offValue || "Off"}
        </span>
        <span
          className={cx(
            styles.default,
            styles.on,
            this.props.value == 1 ? styles.Selected : ""
          )}
        >
          {this.props.onValue || "On"}
        </span>
      </button>
    );
  }
}
