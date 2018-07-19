import React, { Component } from "react";

import { Parent } from "../Parent";

import styles from "./Nav.less";
export class Nav extends Component {
  render() {
    return (
      <nav className={`${styles.Nav} ${this.props.className}`}>
        {this.props.content.map(item => {
          // create a Parent for each object in the array
          // parents render children if present
          return (
            <Parent {...item} key={item.title} selected={this.props.selected} />
          );
        })}
      </nav>
    );
  }
}
