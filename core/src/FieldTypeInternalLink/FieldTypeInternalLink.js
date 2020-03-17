import React, { useState } from "react";
import debounce from "lodash.debounce";

import { Select, Option } from "../Select";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeInternalLink.less";
export const FieldTypeInternalLink = React.memo(function FieldTypeInternalLink(
  props
) {
  // console.log("FieldTypeInternalLink:render");

  const [loading, setLoading] = useState(false);

  const onSearch = debounce(term => {
    if (term && props.onSearch) {
      setLoading(true);
      props.onSearch(term).then(() => {
        setLoading(false);
      });
    }
  }, 250);

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
        placeholder={props.placeholder}
        value={props.value || "0"}
        onSelect={props.onChange}
        onFilter={onSearch}
        // always render search input
        searchPlaceholder="Do not see the item you are looking for? Enter a term to search your API."
        searchLength="0"
        loading={loading}
      >
        {/* You should always be able to unlink an internal link */}
        <Option
          value={props.defaultOptValue || "0"}
          text={props.defaultOptText || "— None —"}
        />

        {props.options.map((option, i) => {
          return <Option key={i} {...option} />;
        })}
      </Select>

      <FieldDescription description={props.description} />
    </article>
  );
});
