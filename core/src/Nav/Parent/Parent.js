import React from "react";
import { Node } from "../Node";

import styles from "./Parent.less";
export class Parent extends React.PureComponent {
  renderMenuItem = item => {
    // track recursion depth and pass it as a prop to the node component
    const recursionDepth = item.depth + 1 || 1;

    return item.children ? (
      // if the item has children
      // render the item and then it's children
      <React.Fragment key={item.path}>
        <Node
          {...item}
          depth={recursionDepth}
          selected={item.selected}
          handleOpen={this.props.handleOpen}
          handleHide={this.props.handleHide}
        />
        {item.children.map(child => (
          <Parent
            {...child}
            // If the current node is closed then
            // tell child nodes to not display
            isClosed={item.closed}
            key={child.path}
            depth={recursionDepth}
            selected={item.selected}
            handleOpen={this.props.handleOpen}
            handleHide={this.props.handleHide}
          />
        ))}
      </React.Fragment>
    ) : (
      <Node
        {...item}
        key={item.path}
        depth={recursionDepth}
        selected={item.selected}
        handleOpen={this.props.handleOpen}
        handleHide={this.props.handleHide}
      />
    );
  };
  render() {
    return (
      <article className={styles.Parent}>
        <ul className={this.props.isClosed ? styles.closed : ""}>
          {this.renderMenuItem(this.props)}
        </ul>
      </article>
    );
  }
}
