import React, { PureComponent } from "react";
import cx from "classnames";

import { Parent } from "../Parent";

import styles from "./Nav.less";
export class Nav extends PureComponent {
  static defaultProps = {
    open: true
  };
  state = {
    open: this.props.open
  };
  render() {
    return (
      <nav className={cx(styles.Nav, this.props.className)}>
        {this.props.content.map(item => {
          // create a Parent for each object in the array
          // parents render children if present
          return (
            <Parent
              {...item}
              key={item.path}
              closed={!this.state.open}
              selected={this.props.selected}
            />
          );
        })}
      </nav>
    );
  }
  handleOpen = evt => {
    this.setState({ open: !this.state.open });
  };
}
