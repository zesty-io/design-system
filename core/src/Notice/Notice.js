import React from "react";
import cx from "classnames";

import styles from "./Notice.less";
export const Notice = React.memo(function Notice(props) {
  return (
    <aside className={cx(styles.Notice, styles.Warn, props.className)}>
      <i className={cx(styles.Icon, "fas fa-exclamation-triangle")} />
      {props.children}
    </aside>
  );
});
