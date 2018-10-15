import React, { Component } from "react";

import styles from "./tags.less";

export class Tag extends Component {
  render() {
    return (
      <span className={styles.Tag}>
        <i className="fa fa-times-circle" onClick={this.removeTag} />
        <a href={this.props.ZUID}>{this.props.name}</a>
      </span>
    );
  }
  removeTag = () => {
    if (this.props.onRemove) {
      this.props.onRemove(this.props.ZUID);
    }
  };
}
