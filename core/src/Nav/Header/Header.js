import React from "react";
import styles from "./Header.less";
export const Header = ({ title, open, handleOpen }) => {
  return (
    <span className={styles.Title}>
      <h2>
        {/* <i className={`fa fa-${icon} ${styles.titleIcon}`} />{' '} */}
        {title.toUpperCase()}
      </h2>
      <i
        className={open ? "fa fa-caret-down" : "fa fa-caret-left"}
        onClick={() => handleOpen()}
      />
    </span>
  );
};
