import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={props.path}>
        <i className={props.icon} />
        <span>{props.label}</span>
      </Link>

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
