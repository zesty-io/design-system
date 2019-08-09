import React from "react";
import cx from "classnames";
import styles from "./ToggleButton.less";

/**
  @props props.value 0:No 1:Yes
**/
export function ToggleButton(props) {
  return (
    <button
      className={cx(styles.ToggleButton, props.className)}
      title={props.title}
      onClick={evt => {
        evt.stopPropagation();
        evt.preventDefault();

        props.onChange(props.name, props.value == 1 ? 0 : 1, props.datatype);
      }}
      disabled={props.disabled}
    >
      <span
        className={cx(
          styles.default,
          styles.off,
          props.value == 0 ? styles.Selected : ""
        )}
      >
        {props.offValue || "Off"}
      </span>
      <span
        className={cx(
          styles.default,
          styles.on,
          props.value == 1 ? styles.Selected : ""
        )}
      >
        {props.onValue || "On"}
      </span>
    </button>
  );
}
