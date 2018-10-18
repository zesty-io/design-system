import React, { Component, Fragment } from "react";
import { Node } from "../Node";

import styles from "./Parent.less";
export class Parent extends Component {
  state = {
    active: false
  };
  renderMenuItem = item => {
    const { active } = this.state;
    const { context, handleOpen } = this.props;
    // track recursion depth and pass it as a prop to the node component
    const recursionDepth = item.depth + 1 || 1;
    return item.children ? (
      // if the item has children
      // render the item and then it's children
      <Fragment key={item.path}>
        <Node
          {...item}
          selected={item.selected}
          active={active}
          collapsed={Array.isArray(context) && context.includes(item.path)}
          depth={recursionDepth}
          handleOpen={handleOpen}
        />
        {item.children.map(child => (
          <Parent
            {...child}
            key={child.path}
            depth={recursionDepth}
            selected={item.selected}
            active={active}
            closed={
              (Array.isArray(context) && context.includes(item.path)) ||
              item.closed
            }
            handleOpen={handleOpen}
            context={context}
          />
        ))}
      </Fragment>
    ) : (
      <Node
        {...item}
        selected={item.selected}
        depth={recursionDepth}
        active={active}
        handleOpen={handleOpen}
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
        <ul className={this.props.closed ? styles.closed : ""}>
          {this.renderMenuItem(this.props)}
        </ul>
      </article>
    );
  }
}
