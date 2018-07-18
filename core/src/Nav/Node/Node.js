import React from "react";
import { Link } from "react-router-dom";

import styles from "./Node.less";
export function Node(props) {
  // find a way to dynamically render an icon, switch to match Node type?
  // maybe need to check the nav bar to see if this is active?
  return (
    <li
      className={`${styles.item} ${props.active &&
        styles.active}  ${props.selected === props.ZUID && styles.selected}`}
      key={props.ZUID}
    >
      <Link to={`/${props.ZUID}`}>
        <i className={`fa fa-${props.icon}`} />
        <span>{props.name}</span>
      </Link>
      {props.children && (
        <i
          className={props.closed ? "fa fa-chevron-left" : "fa fa-chevron-down"}
          onClick={() => props.handleOpen(props.ZUID)}
        />
      )}
    </li>
  );
}
