import React, { Component } from "react";
import styles from "./Drawer.less";

export class Drawer extends Component {
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
        <Handle
          collapsed={collapsed}
          faOpen={this.props.faOpen}
          faClosed={this.props.faClosed}
          callback={() => this.setState({ collapsed: !collapsed })}
        />
        <div className={styles.Container}>{children}</div>
      </div>
    );
  }
}

export class Handle extends Component {
  render() {
    return (
      <i
        className={
          (this.props.collapsed
            ? this.props.faClosed || "fa fa-bars "
            : this.props.faOpen || "fa fa-times ") + styles.close
        }
        onClick={this.props.callback}
      />
    );
  }
}
// <Drawer> className={leftside}
//   <Closer>
//     <i />
//   </Closer>
//   Now mu ``y custom buz
// </Drawer>
