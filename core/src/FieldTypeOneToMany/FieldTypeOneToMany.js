import React, { useState, useEffect } from "react";

import { Tag } from "../Tag";
import { Loader } from "../Loader";
import { Select, Option } from "../Select";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeOneToMany.less";

export const FieldTypeOneToMany = React.memo(function FieldTypeOneToMany(
  props
) {
  // console.log("FieldTypeOneToMany:render");

  const [loaded, setLoaded] = useState(false); // Used to ensure we only load data once
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState(
    // split string of zuids and trim any whitespace
    props.value ? props.value.split(",").map((v) => v.trim()) : []
  );

  const loadItems = () => {
    setLoading(true);
    props.onOpen().then(() => {
      setLoading(false);
      setLoaded(true);
    });
  };

  // On initial render if we have selected items then load them from the API
  useEffect(() => {
    if (selectedItems.length) {
      loadItems();
    }
  }, []);

  /**
   * Remove selected zuid from array and broadcast change
   * @param {String} zuid
   */
  const onRemove = (_, zuid) => {
    // Exclude the removed item from our `selectedItems` array
    let filteredItems = selectedItems.filter((item) => item !== zuid);

    setSelectedItems(filteredItems);

    if (props.onChange) {
      props.onChange(
        props.name,
        // send a csv string to update store
        filteredItems.join(","),
        props.datatype
      );
    }
  };

  /**
   *
   * @param {String} value
   */
  const onSelect = (name, value) => {
    const option = props.options.find((option) => option.value === value);
    if (option && option.value !== "0") {
      let items = [...selectedItems, option.value];

      setSelectedItems(items);

      if (props.onChange) {
        props.onChange(
          props.name,
          // send a csv string to update store
          items.join(","),
          props.datatype
        );
      }
    } else {
      console.error(
        `FieldTypeOneToMany:onSelect - Unknown option selected (${value})`
      );
    }
  };

  return (
    <div className={props.className}>
      <label htmlFor={props.name}>
        <FieldLabel
          label={props.label}
          required={props.required}
          tag={props.tag}
          tooltip={props.tooltip}
        />
      </label>

      <section className={styles.OneToMany}>
        <Select
          className={styles.Select}
          name={props.name}
          value="0" // By providing a 0 value we pre-select our "empty" option
          onSelect={onSelect}
          onClick={() => {
            if (!loaded && props.onOpen) {
              loadItems();
            }
          }}
        >
          <Option value="0" text="— Select Option —" />
          {loading && <Loader />}
          {props.options.map((opt, i) => {
            return <Option key={i} {...opt} />;
          })}
        </Select>

        <article className={styles.Tags}>
          {props.options.length && selectedItems.length ? (
            props.options
              .filter((option) => selectedItems.includes(option.value))
              .map((item, i) => (
                <Tag key={i} onRemove={onRemove} value={item.value}>
                  {item.component || item.text || item.filterValue}
                </Tag>
              ))
          ) : (
            <p>Select tags to associate them with your item.</p>
          )}
        </article>
      </section>
      <FieldDescription description={props.description} />
    </div>
  );
});
