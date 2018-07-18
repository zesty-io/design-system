import React from "react";
import { Link } from "react-router-dom";

import styles from "./Node.less";
export function Node(props) {
  // style if a node is active
  const isActive = props.active && styles.active;
  // style is a node is selected
  const isSelected = props.selected === props.ZUID && styles.selected;
  // style if a node is parent of selected
  const isParentOfSelected =
    props.selected.includes(props.ZUID) && styles.parentOfSelected;
  return (
    <li
      className={`${
        styles.item
      } ${isActive} ${isParentOfSelected} ${isSelected}`}
      key={props.ZUID}
    >
      <Link to={`/${props.ZUID}`}>
        <i className={`fa fa-${props.icon}`} />
        <span>{props.name}</span>
      </Link>
      {props.children && (
        <i
          className={props.closed ? "fa fa-caret-left" : "fa fa-caret-down"}
          onClick={() => props.handleOpen(props.ZUID)}
        />
      )}
    </li>
  );
}
