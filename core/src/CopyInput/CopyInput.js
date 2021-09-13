import React  from "react";
import cx from "classnames";

import { CopyButton } from "../CopyButton";

import styles from "./CopyInput.less";

export const CopyInput = (props) => {

    return (
      <React.Fragment>
        <label className={styles.CopyInput}>
          <CopyButton
            className={cx(styles.CopyButton, props.className)}
            value={props.value}
            kind={props.kind}
            type={props.type}
            size={props.size}
          >
            Copy
          </CopyButton>
          <input type="text" defaultValue={props.value} readOnly />
        </label>
      </React.Fragment>
    );
};
