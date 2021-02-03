import React, { useState, useEffect } from "react";
import cx from "classnames";

import { Button } from "../Button";

import styles from "./Drawer.less";
export const Drawer = React.memo(function Drawer(props) {
  const [open, setOpen] = useState(Boolean(props.open));

  /**
   * We need to determine and set the drawer styling imperatively since
   * child components can have dynamic dimensions based on content
   *
   * NOTE: because we use height/width auto to allow for dynamic dimensions
   * we can not animate the drawer "opening/closing" when changing the height/width value.
   */

  const style = {};
  style.overflowY = "scroll";

  if (props.position === "top") {
    style["top"] = 0;
  }
  if (props.position === "right") {
    style["right"] = 0;
  }
  if (props.position === "bottom") {
    style["bottom"] = 0;
  }
  if (props.position === "left") {
    style["left"] = 0;
  }

  if (props.position === "left" || props.position === "right") {
    style.height = props.height || "100%";
    style.width = props.width || "auto";
  }
  if (props.position === "top" || props.position === "bottom") {
    style.height = props.height || "auto";
    style.width = props.width || "100%";
  }

  if (!open) {
    style.overflowY = "hidden";

    // When closed we just set the dimension to the offset
    if (props.position === "left" || props.position === "right") {
      style.width = props.offset || "30px";
    }
    if (props.position === "top" || props.position === "bottom") {
      style.height = props.offset || "30px";
    }
  }

  // Listen to consumer updates
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <div
      style={style}
      className={cx(
        styles.Drawer,
        styles[props.position],
        open ? styles.open : null,
        props.className
      )}
    >
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  );
});

export const DrawerHandle = React.memo(function DrawerHandle(props) {
  return (
    <menu
      className={cx(styles.DrawerHandle, props.className)}
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
        props.setOpen(!props.open);
      }}
    >
      {React.Children.count(props.children) ? (
        props.children
      ) : (
        <Button>
          <i
            className={cx(
              styles.handle,
              props.open ? "fa fa-times" : "fa fa-bars"
            )}
          />
        </Button>
      )}
    </menu>
  );
});

export const DrawerContent = React.memo(function DrawerContent(props) {
  return (
    <div className={cx(styles.DrawerContent, props.className)}>
      {props.children}
    </div>
  );
});
