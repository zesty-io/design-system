import React, { Component } from "react";
import styles from "./CollapsibleWrapper.less";

export class CollapsibleWrapper extends Component {
  state = {
    collapsed: false
  };
  render() {
    const { direction, children } = this.props;
    const { collapsed } = this.state;
    return (
      <div
        className={`${styles.CollapseRight} ${
          collapsed ? styles.collapsed : ""
        }`}
      >
        <i
          className={
            (collapsed ? "fa fa-bars " : "fa fa-times ") + styles.close
          }
          onClick={() => this.setState({ collapsed: !collapsed })}
        />
        <div className={styles.Container}>{children}</div>
      </div>
    );
  }
}

// <Drawer> className={leftside}
//   <Closer>
//     <i />
//   </Closer>
//   Now mu ``y custom buz
// </Drawer>
