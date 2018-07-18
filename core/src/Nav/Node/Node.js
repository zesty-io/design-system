import React from "react";
import { Link } from "react-router-dom";

import styles from "./Node.less";
export function Node(props) {
  // style if a node is active
  const isActive = (props.active && styles.active) || "";
  // style is a node is selected
  const isSelected = (props.selected === props.path && styles.selected) || "";
  // style if a node is parent of selected
  const isParentOfSelected =
    (props.selected.includes(props.path) && styles.parentOfSelected) || "";
  const isClosed = props.closed && styles.closed;
  return (
    <li
      className={`${styles.item} ${isActive} ${
        styles[`depth${props.depth}`]
      } ${isParentOfSelected} ${isSelected} ${isClosed}`}
      key={props.path}
    >
      <Link to={`/${props.path}`}>
        <i className={`fa fa-${props.icon}`} />
        <span>{props.name}</span>
      </Link>
      {props.children && (
        <i
          className={props.closed ? "fa fa-caret-left" : "fa fa-caret-down"}
          onClick={() => props.handleOpen(props.path)}
        />
      )}
    </li>
  );
}
