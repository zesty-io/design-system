import React, { useState, useEffect } from "react";
import cx from "classnames";

import { Button } from "../Button";

import styles from "./Drawer.less";
export function Drawer(props) {
  const [open, setOpen] = useState(Boolean(props.open));

  // Listen to consumer updates
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <div
      className={cx(
        styles.Drawer,
        styles[props.position],
        open ? styles[`${props.position}Open`] : null,
        props.className
      )}
      // style={
      //   props.position && props.peak
      //     ? {
      //         [props.position]: props.peak
      //       }
      //     : null
      // }
    >
      {React.Children.map(props.children, child =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  );
}

export function DrawerHandle(props) {
  return React.Children.count(props.children) ? (
    props.children
  ) : (
    <Button onClick={() => props.setOpen(!props.open)}>
      <i
        className={cx(styles.handle, props.open ? "fa fa-times" : "fa fa-bars")}
      />
    </Button>
  );
}

export function DrawerContent(props) {
  return <div className={styles.DrawerContent}>{props.children}</div>;
}
