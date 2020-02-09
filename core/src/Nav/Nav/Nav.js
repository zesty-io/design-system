import React from "react";
import cx from "classnames";

import { Parent } from "../Parent";
import buildNavTree from "./buildNavTree";

import styles from "./Nav.less";
export function Nav(props) {
  var tree = buildNavTree(props.tree);
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
