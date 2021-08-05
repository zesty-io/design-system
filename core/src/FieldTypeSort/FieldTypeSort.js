import React, { useState } from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

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
      props.onChange(value, props.name, props.datatype);
    }

    setSort(value);
  };

  const handleChange = (evt) => {
    evt.stopPropagation();

    const value = Number(evt.target.value);

    if (props.onChange) {
      props.onChange(value, props.name, props.datatype);
    }

    setSort(value);
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
          onClick={(evt) => handleClick(evt, true)}
        >
          <FontAwesomeIcon icon={faPlus} />
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
          onClick={(evt) => handleClick(evt)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </section>
      <FieldDescription description={props.description} />
    </article>
  );
});
