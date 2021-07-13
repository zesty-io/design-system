import React from "react";
import cx from "classnames";

import { Parent } from "../Parent";
import styles from "./Nav.less";
export function Nav(props) {
  const navStyle = props.className == 'dark' ? 'dark' : 'light'
  return (
    <nav
      id={props.id || "Navigation"}
      className={props.className == 'dark' ? cx(styles.Nav, styles.Dark) : cx(styles.Nav, props.className)}
    >
      {props.tree.map((item) => (
        <Parent
          {...item}
          key={item.path}
          className={navStyle}
          selected={props.selected}
          collapseNode={props.collapseNode}
          actions={props.actions}
        />
      ))}
    </nav>
  );
}
