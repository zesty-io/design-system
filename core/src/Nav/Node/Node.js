import React, { PureComponent } from "react";

import styles from "./Node.less";

export class Node extends PureComponent {
  render() {
    const {
      active,
      selected,
      // closed,
      collapsed,
      depth,
      path,
      icon,
      name,
      children,
      handleOpen
    } = this.props;
    // style if a node is active
    const isActive = (active && styles.active) || "";
    // style is a node is selected
    const isSelected = (selected.includes(path) && styles.selected) || "";
    // check if a parent node is collapsed
    // const isClosed = closed && styles.closed;
    return (
      <li
        className={`${styles.item} ${isActive} ${
          styles[`depth${depth}`]
        } ${isSelected}`}
        key={path}
      >
        <a href={path}>
          <i className={`fa fa-${icon}`} />
          <span>{name}</span>
        </a>
        {children &&
          Boolean(children.length) && (
            <i
              className={collapsed ? "fa fa-caret-left" : "fa fa-caret-down"}
              onClick={() => handleOpen(path)}
            />
          )}
      </li>
    );
  }
}
