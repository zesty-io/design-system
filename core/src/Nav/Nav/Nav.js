import React from "react";
import cx from "classnames";

import { Parent } from "../Parent";

import styles from "./Nav.less";
export const Nav = ({ className, content, selected }) => {
  return (
    <nav className={cx(styles.Nav, className)}>
      {content.map(item => {
        return <Parent {...item} key={item.path} selected={selected} />;
      })}
    </nav>
  );
};
