import React, { Component } from "react";
import cx from "classnames";

import { Parent } from "../Parent";

import styles from "./Nav.less";

export class Nav extends Component {
  state = {
    closed: []
  };
  componentDidMount() {
    if (localStorage.getItem(this.uniqueName())) {
      this.setState({
        closed: JSON.parse(localStorage.getItem(this.uniqueName()))
      });
    }
  }
  uniqueName() {
    return this.props.name ? `zesty-io:nav:${this.props.name}` : "zesty-io:nav";
  }
  handleOpen = path => {
    // add or remove path from closed state array
    const closedItems = [...this.state.closed];
    const replaceClosed = closedItems.includes(path)
      ? closedItems.filter(e => e !== path)
      : [...closedItems, path];

    return this.setState({ closed: replaceClosed }, () => {
      localStorage.setItem(this.uniqueName(), JSON.stringify(replaceClosed));
    });
  };
  render() {
    const { className, content, selected } = this.props;
    return (
      <nav className={cx(styles.Nav, className)}>
        {content.map(item => (
          <Parent
            {...item}
            key={item.path}
            selected={selected}
            context={this.state.closed}
            handleOpen={this.handleOpen}
          />
        ))}
      </nav>
    );
  }
}
