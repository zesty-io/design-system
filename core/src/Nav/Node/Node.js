import React from "react";
import cx from "classnames";

import styles from "./Node.less";
export function Node(props) {
  return (
    <li
      className={cx(
        styles.item,
        styles[`depth${props.depth}`],
        props.selected.includes(props.path) ? styles.selected : null
      )}
    >
      {props.type === "directory" ? (
        <span className={styles.directory}>
          {props.icon && <i className={props.icon} />}
          <span>{props.label}</span>
        </span>
      ) : (
        <>
          <a href={props.path}>
            {props.icon && <i className={props.icon} />}
            <span>{props.label}</span>
          </a>

          {/* Only linkable nodes can have actions */}
          <span className={styles.actions}>
            {props.actions &&
              props.actions.map((action, i) => {
                return (
                  // Run consumer provided function to determine
                  // whether action is available
                  (action.available ? action.available(props) : true) && (
                    <i
                      key={i}
                      className={cx(
                        styles.action,
                        // Determines whether the action icon is persistently shown
                        // or shown on hover
                        action.showIcon ? null : styles.hide,
                        action.icon,
                        action.styles
                      )}
                      onClick={() => action.onClick(props)}
                    />
                  )
                );
              })}
          </span>
        </>
      )}

      {props.collapseNode &&
        Array.isArray(props.children) &&
        Boolean(props.children.length) && (
          <i
            className={cx(
              styles.collapse,
              props.closed ? "fa fa-caret-right" : "fa fa-caret-down"
            )}
            onClick={() => props.collapseNode(props)}
          />
        )}
    </li>
  );
}
