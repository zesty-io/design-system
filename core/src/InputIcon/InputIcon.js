import React from "react";
import cx from "classnames";
import { Button } from "../Button";
import styles from "./InputIcon.less";
export function InputIcon(props) {
  return (
    <Button className={styles.InputIcon} onClick={props.onClick}>
      {/*React.cloneElement(props.children, {
        className: cx(styles.Icon, props.children.className)
      })*/}

      {props.children}
    </Button>
  );
}
