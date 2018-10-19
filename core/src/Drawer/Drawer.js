import React, { Component, cloneElement, Children } from "react";
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
        {Children.map(children, child =>
          cloneElement(child, {
            ...collapsed,
            callback: () => this.setState({ collapsed: !collapsed })
          })
        )}
      </div>
    );
  }
}

export function DrawerHandle(props) {
  return (
    <i
      className={
        (props.collapsed
          ? props.faClosed || "fa fa-bars "
          : props.faOpen || "fa fa-times ") + styles.close
      }
      onClick={props.callback}
    />
  );
}

export function DrawerContent(props) {
  const { children } = props;
  return <div className={styles.Container}>{children}</div>;
}
