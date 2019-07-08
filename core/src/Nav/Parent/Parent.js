import React from "react";
import { Node } from "../Node";

import styles from "./Parent.less";
export function Parent(props) {
  // track recursion depth and pass it as a prop to the node component
  const depth = props.depth + 1 || 1;

  return (
    <article className={styles.Parent}>
      <ul className={props.isClosed ? styles.closed : ""}>
        {Array.isArray(props.children) && props.children.length ? (
          // if the item has children
          // render the item and then it's children
          <React.Fragment>
            <Node
              {...props}
              depth={depth}
              selected={props.selected}
              handleOpen={props.handleOpen}
              handleHide={props.handleHide}
            />
            {props.children.map(child => (
              <Parent
                {...child}
                // If the current node is closed then
                // tell child nodes to not display
                isClosed={props.closed}
                key={child.path}
                depth={depth}
                selected={props.selected}
                handleOpen={props.handleOpen}
                handleHide={props.handleHide}
              />
            ))}
          </React.Fragment>
        ) : (
          <Node
            {...props}
            depth={depth}
            selected={props.selected}
            handleOpen={props.handleOpen}
            handleHide={props.handleHide}
          />
        )}
      </ul>
    </article>
  );
}
