import React from "react";
import cx from "classnames";

import { Parent } from "../Parent";
import buildTree from "./buildTree";

import styles from "./Nav.less";
export function Nav(props) {
  var tree = buildTree(props.tree);
  return (
    <nav
      id={props.id || "Navigation"}
      className={cx(styles.Nav, props.className)}
    >
      {tree.map(item => (
        <Parent
          {...item}
          key={item.path}
          selected={props.selected}
          handleOpen={props.handleOpen}
          handleHide={props.handleHide}
        />
      ))}
    </nav>
  );
}
