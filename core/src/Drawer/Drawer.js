import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";

import { Button } from "../Button";

import styles from "./Drawer.less";
export const Drawer = React.memo(function Drawer(props) {
  const [open, setOpen] = useState(Boolean(props.open));
  const drawerRef = useRef(null);

  // Listen to consumer updates
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  let offset = props.offset || "30px";
  let css = {};

  // Determine initial dimensions
  switch (props.position) {
    case "left":
    case "right":
      css["height"] = props.height || "100%";
      css["width"] = props.width || "auto";
      break;

    case "top":
    case "bottom":
      css["height"] = props.height || "auto";
      css["width"] = props.width || "100%";
      break;

    default:
      throw new Error(
        `Unsupported Drawer component position: ${props.position}`
      );
  }

  // When closed we dynamically calculate the position with an offset
  // Allowing for the handle to be visible and re-open the drawer
  if (!open && drawerRef.current) {
    const closedWidth = `calc(-${css.width} + ${offset})`;
    const closedAutoWidth = `calc(-${drawerRef.current.offsetWidth}px + ${offset})`;

    const closedHeight = `calc(-${css.height} + ${offset})`;
    const closedAutoHeight = `calc(-${drawerRef.current.offsetHeight}px + ${offset})`;

    switch (props.position) {
      case "left":
        if (css.width === "auto") {
          css["left"] = closedAutoWidth;
        } else {
          css["left"] = closedWidth;
        }
        break;

      case "right":
        if (css.width === "auto") {
          css["right"] = closedAutoWidth;
        } else {
          css["right"] = closedWidth;
        }
        break;

      case "top":
        if (css.height === "auto") {
          css["top"] = closedAutoHeight;
        } else {
          css["top"] = closedHeight;
        }
        break;

      case "bottom":
        if (css.height === "auto") {
          css["bottom"] = closedAutoHeight;
        } else {
          css["bottom"] = closedHeight;
        }
        break;
    }
  }

  return (
    <div
      ref={drawerRef}
      className={cx(
        styles.Drawer,
        styles[props.position],
        open ? styles.open : null,
        props.className
      )}
      style={css}
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
