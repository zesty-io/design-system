import React from "react";
import cx from "classnames";

import { Parent } from "../Parent";
import styles from "./Nav.less";
export function Nav(props) {

  return (
    <nav
      id={props.id || "Navigation"}
      className={props.lightMode == 'true' ? cx(styles.Nav, props.className) :  cx(styles.Nav, styles.Dark) }
    >
      {props.tree.map((item) => (
        <Parent
          {...item}
          key={item.path}
          lightMode={props.lightMode || null}
          className={props.className}
          selected={props.selected}
          collapseNode={props.collapseNode}
          actions={props.actions}
        />
      ))}
    </nav>
  );
}
