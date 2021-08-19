import React, { useState, useEffect } from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faCheck } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button";

import styles from "./CopyChip.less";

export const CopyChip = (props) => {
  const [copied, setCopied] = useState(false);

  function fallback(text) {
    if (window.clipboardData && window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData("Text", text);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      const textarea = document.createElement("textarea");
      textarea.innerText = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        setCopied(true);
        document.execCommand("copy");
      } catch (err) {
        console.err(err);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }

  const copyValue = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(props.value);
      setCopied(true);
    }
    fallback(props.value);
    return;
  };

  useEffect(() => {
    let iconTimer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(iconTimer);
    };
  }, [copied]);

  return (
    <span

      className={cx(styles.CopyChip, props.className)}
      onClick={copyValue}
    >
      <Button kind="outlined" size="small">
        {copied ? (
          <FontAwesomeIcon className={styles.CheckIcon} icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faClipboard} />
        )}

        {props.children}
      </Button>
      {copied && (
        <span className={cx(styles.Copied)}>{props.copySuccessMessage}</span>
      )}
    </span>
  );
};
