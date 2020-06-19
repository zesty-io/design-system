import React from "react";
import cx from "classnames";
import { Card, CardFooter, CardContent } from "../Card";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";

import styles from "./ConfirmDialog.less";

export const ConfirmDialog = (props) => {
  return (
    (props.isOpen && (
      <section className={styles.confirmWrapper}>
        <Card className={cx(styles.Confirm, styles[props.kind])}>
          <CardContent>
            <h3>{props.prompt}</h3>
          </CardContent>
          <CardFooter>
            {props.children ? (
              // custom buttonGroup renders
              <ButtonGroup
                className={`${styles.buttons} ${
                  props.single ? styles.short : ""
                }`}
              >
                {props.children}
              </ButtonGroup>
            ) : (
              <ButtonGroup
                className={`${styles.buttons} ${
                  props.single ? styles.short : ""
                }`}
              >
                <Button
                  id="confirmTrue"
                  type={props.kind}
                  onClick={() => {
                    props.callback(true);
                  }}
                >
                  {props.kind === "warn" && (
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    />
                  )}
                  {props.confirmText || "Yes"}
                </Button>
                <Button
                  id="confirmFalse"
                  onClick={() => {
                    props.callback(false);
                  }}
                  className={props.single ? styles.hide : ""}
                  text="No"
                />
              </ButtonGroup>
            )}
          </CardFooter>
        </Card>
      </section>
    )) ||
    null
  );
};
