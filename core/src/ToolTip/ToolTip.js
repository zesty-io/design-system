import React, { useState } from "react";
import cx from "classnames";
import styles from "./ToolTip.less";

export function ToolTip(props) {
  console.log(props);
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 350);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={styles.TooltipWrapper}
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div
          className={cx(
            styles.ToolTip,
            props.direction ? styles[`${props.direction}`] : styles.Top,
            props.className
          )}
        >
          {props.content ? props.content : props.children}
        </div>
      )}
    </div>
  );
}
