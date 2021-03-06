import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
          <Link to={props.path}>
            <FontAwesomeIcon icon={props.icon} />
            <span>{props.label}</span>
          </Link>

          {/* Only linkable nodes can have actions */}
          <span className={styles.actions}>
            {React.Children.map(props.actions, (action, index) => {
              // Run consumer provided function to determine
              // whether action is available
              const isAvailable = action.props.available
                ? action.props.available(props)
                : true;

              // Filter out props which will not translate to the DOM
              const { showIcon, available, ...filteredProps } = action.props;
              const child = { ...action, props: filteredProps };

              return (
                isAvailable &&
                React.cloneElement(child, {
                  key: index,
                  className: cx(
                    styles.action,
                    action.props.showIcon ? null : styles.hide,
                    action.props.className
                  ),
                  onClick: () => action.props.onClick(props),
                })
              );
            })}
          </span>
        </>
      )}

      {props.collapseNode &&
        Array.isArray(props.children) &&
        Boolean(props.children.length) && (
          <FontAwesomeIcon
            icon={props.closed ? faCaretLeft : faCaretDown}
            className={styles.collapse}
            onClick={() => props.collapseNode(props)}
          />
        )}
    </li>
  );
}
