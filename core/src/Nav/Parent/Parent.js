import React from "react";
import { Node } from "../Node";
import cx from "classnames";
import styles from "./Parent.less";
export function Parent(props) {
  // track recursion depth and pass it as a prop to the node component
  const depth = props.depth + 1 || 1;
  
  return (
    <article className={props.lightMode == 'true' ? styles.Parent : cx(styles.Parent, styles.Dark) }>
      <ul className={props.isClosed ? styles.closed : ""}>
        {Array.isArray(props.children) && props.children.length ? (
          // if the item has children
          // render the item and then it's children
          <React.Fragment>
            <Node
              {...props}
              lightMode={props.lightMode}
              depth={depth}
              selected={props.selected}
              collapseNode={props.collapseNode}
              actions={props.actions}
            />
            {props.children.map((child) => (
              <Parent
                {...child}
                // If the current node is closed then
                // tell child nodes to not display
                isClosed={props.closed}
                lightMode={props.lightMode}
                key={child.path}
                depth={depth}
                selected={props.selected}
                collapseNode={props.collapseNode}
                actions={props.actions}
              />
            ))}
          </React.Fragment>
        ) : (
          <Node
            {...props}
            lightMode={props.lightMode}
            depth={depth}
            selected={props.selected}
            collapseNode={props.collapseNode}
            actions={props.actions}
          />
        )}
      </ul>
    </article>
  );
}
