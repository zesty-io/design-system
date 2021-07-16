import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Url } from "../Url"
import styles from "./Docs.less";

export function Docs(props) {

  return (
    <Url target="_blank" title={`Open documentation for ${props.subject}`} className={styles.DocsLink} href={props.url ? props.url : `https://zesty.org/?q=${props.subject}`}>
      <FontAwesomeIcon icon={faBook} className={styles.icon} />
        Documentation
    </Url>
  );
}
