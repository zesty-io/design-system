import React from "react";
import styles from "./Button.less";
import cx from "classnames";

export function Button(props) {
  return (
    <button
      {...props}
      className={cx(styles.Button, styles[props.kind], props.className)}
    >
      {props.text}
      {React.Children.map(
        React.Children.toArray(props.children),
        (child, i) => {
          // If the first child is an element
          // assume it's an icon
          if (child.props && i === 0) {
            return React.cloneElement(child, {
              className: cx(styles.icon, child.props.className)
            });
          } else {
            // probably just a text node
            return child;
          }
        }
      )}
    </button>
  );
}
