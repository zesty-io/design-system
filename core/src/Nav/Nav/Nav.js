import React from "react";
import cx from "classnames";

import { Parent } from "../Parent";
import styles from "./Nav.less";
export function Nav(props) {
  return (
    <nav
      id={props.id || "Navigation"}
      className={cx(styles.Nav, props.className)}
    >
      {props.tree.map((item) => (
        <Parent
          {...item}
          key={item.path}
          selected={props.selected}
          collapseNode={props.collapseNode}
          actions={props.actions}
        />
      ))}
    </nav>
  );
}
