import React from "react";
import cx from "classnames";

import styles from "./Node.less";
export function Node(props) {
  return (
    <li
      className={cx(
        styles.item,
        styles[`depth${props.depth}`],
        props.selected.includes(props.path) ? styles.selected : null
      )}
    >
      <a href={props.path}>
        <i className={`fas fa-${props.icon}`} />
        <span>{props.label}</span>
      </a>

      <i
        className={cx("fas fa-eye-slash", styles.hide)}
        onClick={() => props.handleHide(props.path)}
      />

      {Array.isArray(props.children) && Boolean(props.children.length) && (
        <i
          className={props.closed ? "fa fa-caret-left" : "fa fa-caret-down"}
          onClick={() => props.handleOpen(props.path)}
        />
      )}
    </li>
  );
}
