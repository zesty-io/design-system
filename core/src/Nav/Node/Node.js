import React from "react";
import cx from "classnames";

import styles from "./Node.less";
export function Node(props) {
  const handleNav = e => {
    e.preventDefault();
    if (props.path.includes("/")) {
      window.location.href = props.path;
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
      {Array.isArray(props.children) && Boolean(props.children.length) && (
        <i
          className={props.closed ? "fa fa-caret-right" : "fa fa-caret-down"}
          onClick={() => props.handleOpen(props.path)}
        />
      )}

      <a href={props.path} onClick={handleNav}>
        <i className={props.icon} />
        <span>{props.label}</span>
      </a>

      {props.actions &&
        props.actions.map(action => {
          const show = action.handleShow(props);
          return (
            show && (
              <i
                className={cx(styles.Action, action.icon, action.styles)}
                onClick={() => action.onClick(props)}
              />
            )
          );
        })}
    </li>
  );
}
