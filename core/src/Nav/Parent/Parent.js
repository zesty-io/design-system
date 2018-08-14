import React, { Component } from "react";

import { Node } from "../Node";

import styles from "./Parent.less";

export class Parent extends Component {
  state = {
    active: false,
    closed: []
  };
  handleOpen = path => {
    // add or remove path from closed state array
    console.log(path);
    let replaceClosed = [...this.state.closed];
    if (this.state.closed.includes(path)) {
      replaceClosed = this.state.closed.filter(e => e !== path);
    } else {
      replaceClosed.push(path);
    }
    return this.setState({ closed: replaceClosed });
  };
  renderMenuItem = item => {
    // track recursion depth and pass it as a prop to the node component
    const recursionDepth = item.depth + 1 || 1;
    return item.children ? (
      // if the child has children
      // render the child and then it's children
      <React.Fragment key={item.path}>
        <Node
          {...item}
          selected={item.selected}
          active={this.state.active}
          closed={item.closed}
          collapsed={this.state.closed}
          depth={recursionDepth}
          handleOpen={this.handleOpen}
        />
        {item.children.map(child => (
          <Parent
            {...child}
            depth={recursionDepth}
            selected={child.selected}
            active={this.state.active}
            closed={this.state.closed.includes(item.path) || item.closed}
          />
        ))}
      </React.Fragment>
    ) : (
      <Node
        {...item}
        selected={item.selected}
        depth={recursionDepth}
        active={this.state.active}
        closed={item.closed}
        handleOpen={this.handleOpen}
        key={item.path}
      />
    );
  };
  render() {
    return (
      <article
        onMouseEnter={() => {
          this.setState({ active: true });
        }}
        onMouseLeave={() => {
          this.setState({ active: false });
        }}
        className={styles.Parent}
      >
        <ul>{this.renderMenuItem(this.props)}</ul>
      </article>
    );
  }
}
