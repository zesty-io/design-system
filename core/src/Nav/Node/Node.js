import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faCaretLeft,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

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
      <Link to={props.path}>
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.label}</span>
      </Link>

      <FontAwesomeIcon
        icon={faEyeSlash}
        className={styles.hide}
        onClick={() => props.handleHide(props.path)}
      />

      {Array.isArray(props.children) && Boolean(props.children.length) && (
        <FontAwesomeIcon
          icon={props.closed ? faCaretLeft : faCaretDown}
          onClick={() => props.handleOpen(props.path)}
        />
      )}

      {props.actions &&
        props.actions.map((action, i) => {
          const show = action.handleShow(props);
          return (
            show && (
              <i
                key={i}
                className={cx(styles.Action, action.icon, action.styles)}
                onClick={() => action.onClick(props)}
              />
            )
          );
        })}
    </li>
  );
}
