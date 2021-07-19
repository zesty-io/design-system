import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faShare } from "@fortawesome/free-solid-svg-icons";
import { Url } from "../Url"
import styles from "./Docs.less";
import cx from "classnames";

export function Docs(props) {

  return (
    <Url target="_blank" title={`Open documentation for ${props.subject}`} className={styles.DocsLink} href={props.url ? props.url : `https://zesty.org/?q=${props.subject}`}>
      <FontAwesomeIcon 
        icon={faBook} 
        className={cx(
          styles.icon,
          styles.book
        )} />
      <FontAwesomeIcon 
        icon={faShare} 
        className={cx(
          styles.icon,
          styles.share
        )} />
        Docs
    </Url>
  );
}
