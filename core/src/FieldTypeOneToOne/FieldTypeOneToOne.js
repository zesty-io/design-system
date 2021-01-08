import React, { useState } from "react";

import { Loader } from "../Loader";
import { Select, Option } from "../Select";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

// import styles from "./FieldTypeOneToOne.less";
export const FieldTypeOneToOne = React.memo(function FieldTypeOneToOne(props) {
  // console.log("FieldTypeOneToOne:render");

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    if (!loaded && props.onOpen) {
      props.onOpen().then(() => {
        setLoading(false);
      });

      setLoaded(true); // Only load data once
      setLoading(true);
    }
  };

  const onSelect = (value, name) => {
    if (props.onChange) {
      props.onChange(value, name, props.datatype);
    }
  };

  return (
    <article className={props.className}>
      <label htmlFor={props.name}>
        <FieldLabel
          label={props.label}
          required={props.required}
          tag={props.tag}
          tooltip={props.tooltip}
        />
      </label>

      <Select
        name={props.name}
        value={props.value || "0"}
        onClick={onClick}
        onSelect={onSelect}
      >
        <Option
          value={props.defaultOptValue || "0"}
          text={props.defaultOptText || "— None —"}
        />
        {loading && <Loader />}
        {props.children
          ? props.children
          : props.options.map((opt, i) => {
              return <Option key={i} {...opt} />;
            })}
      </Select>

      <FieldDescription description={props.description} />
    </article>
  );
});
