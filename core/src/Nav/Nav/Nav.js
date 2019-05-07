import React from "react";
import cx from "classnames";

import { Parent } from "../Parent";

import styles from "./Nav.less";
export class Nav extends React.PureComponent {
  render() {
    return (
      <nav
        id={this.props.id || "Navigation"}
        className={cx(styles.Nav, this.props.className)}
      >
        {this.props.tree.map(item => (
          <Parent
            {...item}
            key={item.path}
            selected={this.props.selected}
            handleOpen={this.props.handleOpen}
            handleHide={this.props.handleHide}
          />
        ))}
      </nav>
    );
  }
}
