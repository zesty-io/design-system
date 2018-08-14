import React, { PureComponent } from "react";
import cx from "classnames";

import { Parent } from "../Parent";
import { Header } from "../Header";

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
        <Header
          title={this.props.title}
          open={this.state.open}
          handleOpen={this.handleOpen}
        />
        {this.props.content.map(item => {
          // create a Parent for each object in the array
          // parents render children if present
          return (
            <Parent
              {...item}
              key={item.title}
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
