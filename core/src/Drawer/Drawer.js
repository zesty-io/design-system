import React, { Component, cloneElement, Children } from "react";
import styles from "./Drawer.less";

export class Drawer extends Component {
  state = {
    collapsed: false
  };
  render() {
    const { direction, children } = this.props;
    const { collapsed } = this.state;
    const isCollapsed =
      typeof this.props.collapsed !== "undefined"
        ? this.props.collapsed
        : collapsed;
    return (
      <div
        className={`${styles.CollapseRight} ${
          isCollapsed ? styles.collapsed : ""
        }`}
      >
        {Children.map(children, child =>
          cloneElement(child, {
            collapsed: isCollapsed,
            callback: () => {
              if (this.props.setCollapsed)
                this.props.setCollapsed(!this.props.collapsed);
              this.setState({ collapsed: !collapsed });
            }
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
