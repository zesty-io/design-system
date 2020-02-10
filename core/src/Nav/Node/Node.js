import React from "react";
import cx from "classnames";

import styles from "./Node.less";
export function Node(props) {
  handleNav = e => {
    e.preventDefault();
    console.log("props.path", props.path);
    if (props.path.includes("/")) {
      return (window.location.href = `${props.path}`);
    } else {
      props.handleOpen(props.path);
    }
  };
  return (
    <li
      className={cx(
        styles.item,
        styles[`depth${props.depth}`],
        props.selected.includes(props.path) ? styles.selected : null
      )}
    >
      <a onClick={this.handleNav}>
        <i className={props.icon} />
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
