import React from "react";
import cx from "classnames";

import styles from "./Node.less";
export class Node extends React.PureComponent {
  render() {
    return (
      <li
        className={cx(
          styles.item,
          styles[`depth${this.props.depth}`],
          this.props.selected === this.props.path ? styles.selected : ""
        )}
      >
        <a href={this.props.path}>
          <i className={`fa fa-${this.props.icon}`} />
          <span>{this.props.label}</span>
        </a>

        <i
          className={cx("fa fa-eye-slash", styles.hide)}
          onClick={() => this.props.handleHide(this.props.path)}
        />

        {this.props.children && Boolean(this.props.children.length) && (
          <i
            className={
              this.props.closed ? "fa fa-caret-left" : "fa fa-caret-down"
            }
            onClick={() => this.props.handleOpen(this.props.path)}
          />
        )}
      </li>
    );
  }
}
