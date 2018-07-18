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
        className={`${styles.Parent} ${this.state.active && styles.active}`}
      >
        {/* if the item has a title, render it out */}
        {this.props.title && (
          <h2 className={styles.title}>
            <i className={`fa fa-${this.props.icon} ${styles.titleIcon}`} />{" "}
            {this.props.title}
          </h2>
        )}
        <ul>
          {this.props.children.map(
            child =>
              child.children ? (
                // if the child has children
                // render the child and then it's children
                <React.Fragment key={child.ZUID}>
                  <Node
                    {...child}
                    selected={this.props.selected}
                    active={this.state.active}
                    closed={this.state.closed.includes(child.ZUID)}
                    handleOpen={this.handleOpen}
                  />
                  {/* allow for a closed item not to render it's children */}
                  {!this.state.closed.includes(child.ZUID) && (
                    <Parent
                      {...child}
                      selected={this.props.selected}
                      active={this.state.active}
                    />
                  )}
                </React.Fragment>
              ) : (
                <Node
                  {...child}
                  selected={this.props.selected}
                  active={this.state.active}
                  closed={this.state.closed.includes(child.ZUID)}
                  handleOpen={this.handleOpen}
                  key={child.ZUID}
                />
              )
          )}
        </ul>
      </article>
    );
  }
  handleOpen = ZUID => {
    // add or remove ZUID from closed state array
    let replaceClosed = [...this.state.closed];
    if (this.state.closed.includes(ZUID)) {
      replaceClosed = this.state.closed.reduce((acc, e) => {
        if (e !== ZUID) {
          acc.push(e);
        }
        return acc;
      }, []);
    } else {
      replaceClosed.push(ZUID);
    }
    return this.setState({ closed: replaceClosed });
  };
}
