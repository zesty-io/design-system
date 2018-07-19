import React from "react";
// import { Link } from "react-router-dom";

import styles from "./Node.less";
export function Node(props) {
  // style if a node is active
  const isActive = (props.active && styles.active) || "";
  // style is a node is selected
  const isSelected = (props.selected === props.path && styles.selected) || "";
  // check if a parent node is collapsed
  const isClosed = props.closed && styles.closed;
  let isCollapsed =
    props.collapsed &&
    props.collapsed.reduce((acc, collapsed) => {
      if (collapsed === props.path) acc.push(collapsed);
      return acc;
    }, []).length;
  return (
    <li
      className={`${styles.item} ${isActive} ${
        styles[`depth${props.depth}`]
      } ${isSelected} ${isClosed}`}
      key={props.path}
    >
      <a href={`/${props.path}`}>
        <i className={`fa fa-${props.icon}`} />
        <span>{props.name}</span>
      </a>
      {props.children && (
        <i
          className={isCollapsed ? "fa fa-caret-left" : "fa fa-caret-down"}
          onClick={() => props.handleOpen(props.path)}
        />
      )}
    </li>
  );
}
