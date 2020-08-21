import React from "react";
import cx from "classnames";

import styles from "./InputPassword.less";
import { Input } from "../Input";

const charMeter = [...Array(16).keys()];

export function InputPassword(props) {
  return (
    <>
      <Input
        {...props}
        type="password"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[?=.*[a-zA-Z0-9!@#$%^&()<>.,:;[\]{}\-_.+,/]{8,}$"
        className={props.className}
        onChange={props.onChange ? props.onChange : () => {}}
        value={props.value === null ? "" : props.value}
      />
      <div>
        {charMeter.map((char) => (
          <span
            key={"charMeter" + char}
            className={cx(styles.charMeter, {
              [styles.charInput]: char < props.value.length,
            })}
          ></span>
        ))}
      </div>
      <div className={styles.passwordCriteriaMessage}>
        Minimum{" "}
        <span
          className={cx(styles.passwordCriteria, {
            [styles.passwordMatches]: props.value.length >= 8,
          })}
        >
          8
        </span>{" "}
        Characters. One{" "}
        <span
          className={cx(styles.passwordCriteria, {
            [styles.passwordMatches]: /[a-z]/.test(props.value),
          })}
        >
          Lowercase
        </span>
        ,{" "}
        <span
          className={cx(styles.passwordCriteria, {
            [styles.passwordMatches]: /[A-Z]/.test(props.value),
          })}
        >
          Uppercase
        </span>
        , and{" "}
        <span
          className={cx(styles.passwordCriteria, {
            [styles.passwordMatches]: /[0-9]/.test(props.value),
          })}
        >
          Number
        </span>{" "}
        required.
      </div>
    </>
  );
}
