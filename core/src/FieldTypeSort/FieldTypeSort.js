import React, { useState } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { Button } from "../Button";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeSort.less";
export const FieldTypeSort = React.memo(function FieldTypeSort(props) {
  // console.log("FieldTypeSort:render");

  const [sort, setSort] = useState(Number(props.value) || 0);

  const handleClick = (evt, increment) => {
    evt.stopPropagation();

    let value = increment ? Number(sort) + 1 : Number(sort) - 1;

    if (props.onChange) {
      props.onChange(props.name, value, props.datatype);
    }

    setSort(value);
  };

  const handleChange = evt => {
    evt.stopPropagation();

    if (props.onChange) {
      props.onChange(props.name, evt.target.value, props.datatype);
    }

    setSort(evt.target.value);
  };

  return (
    <article className={cx(styles.FieldTypeSort, props.className)}>
      <label>
        <FieldLabel
          label={props.label}
          required={props.required}
          tag={props.tag}
          tooltip={props.tooltip}
        />
      </label>

      <section className={styles.Sort}>
        <Button
          className={cx(styles.Increment, styles.Left)}
          onClick={evt => handleClick(evt, true)}
        >
          <i className="fa fa-plus" />
        </Button>
        <Input
          className={styles.SortNumber}
          type="number"
          value={sort}
          onChange={handleChange}
          required={props.required}
        />
        <Button
          className={cx(styles.Increment, styles.Right)}
          onClick={evt => handleClick(evt)}
        >
          <i className="fa fa-minus" />
        </Button>
      </section>
      <FieldDescription description={props.description} />
    </article>
  );
});
