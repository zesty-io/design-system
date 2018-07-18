import React, { Component } from "react";

import { Node } from "../Node";

import styles from "./Parent.less";
export class Parent extends Component {
  state = {
    active: false,
    closed: []
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
        {/* if the item has a title, render it out */}
        {this.props.title && (
          <span
            className={`${styles.title} ${this.state.active && styles.active}`}
          >
            <h2>
              <i className={`fa fa-${this.props.icon} ${styles.titleIcon}`} />{" "}
              {this.props.title}
            </h2>
            {Boolean(this.props.children.length) && (
              <i
                className={
                  this.state.closed.includes(this.props.title)
                    ? "fa fa-caret-left"
                    : "fa fa-caret-down"
                }
                onClick={() => this.handleOpen(this.props.title)}
              />
            )}
          </span>
        )}
        <ul>{this.renderMenuItem(this.props)}</ul>
      </article>
    );
  }
  handleOpen = path => {
    // add or remove path from closed state array
    let replaceClosed = [...this.state.closed];
    if (this.state.closed.includes(path)) {
      replaceClosed = this.state.closed.reduce((acc, e) => {
        if (e !== path) {
          acc.push(e);
        }
        return acc;
      }, []);
    } else {
      replaceClosed.push(path);
    }
    return this.setState({ closed: replaceClosed });
  };
  renderMenuItem = item => {
    // track recursion depth and pass it as a prop to the node component
    const recursionDepth = item.depth + 1 || 1;
    return (
      !this.state.closed.includes(item.title) &&
      item.children.map(
        child =>
          child.children ? (
            // if the child has children
            // render the child and then it's children
            <React.Fragment key={child.path}>
              <Node
                {...child}
                selected={item.selected}
                active={this.state.active}
                closed={this.state.closed.includes(child.path)}
                depth={recursionDepth}
                handleOpen={this.handleOpen}
              />
              {/* allow for a closed item not to render it's children */}
              {!this.state.closed.includes(child.path) && (
                <Parent
                  {...child}
                  depth={recursionDepth}
                  selected={item.selected}
                  active={this.state.active}
                />
              )}
            </React.Fragment>
          ) : (
            <Node
              {...child}
              selected={item.selected}
              depth={recursionDepth}
              active={this.state.active}
              closed={this.state.closed.includes(child.path)}
              handleOpen={this.handleOpen}
              key={child.path}
            />
          )
      )
    );
  };
}
