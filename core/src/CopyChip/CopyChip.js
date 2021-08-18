import React, { useState, useEffect } from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faCheck } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button";

import styles from "./CopyChip.less";

export const CopyChip = (props) => {
  const defaultCopySuccessMessage = "Copied";
  const { copySuccessMessage = defaultCopySuccessMessage, value } = props;

  const [showCopySuccess, setCopySuccess] = useState(false);

  function fallbackToCopy(text) {
    if (window.clipboardData && window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData("Text", text);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      const textarea = document.createElement("textarea");
      textarea.innerText = text;
      const parentElement = document.getElementById("copy");
      if (!parentElement) {
        return;
      }
      parentElement.appendChild(textarea);
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
      textarea.select();
      try {
        setCopySuccess(true);
        document.execCommand("copy");
      } catch (err) {
        console.err(err);
        return false;
      } finally {
        parentElement.removeChild(textarea);
      }
    }
  }

  const copyID = () => {
    if (!navigator.clipboard) {
      fallbackToCopy(value);
      return;
    }
    navigator.clipboard.writeText(value);
    setCopySuccess(true);
  };

  useEffect(() => {
    let iconTimer = setTimeout(() => {
      setCopySuccess(false);
    }, 1000);

       return () => {
         clearTimeout(iconTimer);
       };


  }, [showCopySuccess]);

  return (
    <span
      id="copy"
      className={cx(styles.CopyChip, props.className)}
      onClick={copyID}
    >
      <Button size="small">
        {showCopySuccess ? (
          <FontAwesomeIcon className={styles.CheckIcon} icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faClipboard} />
        )}

        {props.children}
      </Button>
      {showCopySuccess && (
        <span className={cx(styles.Copied)}>{copySuccessMessage}</span>
      )}
    </span>
  );
};
