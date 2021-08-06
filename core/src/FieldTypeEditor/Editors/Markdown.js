import React, { useCallback, useEffect, useState } from "react";
import styles from "./Markdown.less";

export function MarkdownEditor(props) {

  // controlled component
  const [value, setValue] = useState(props.value)
  const onInput = useCallback((evt) => {
    setValue(evt.target.value)

    // emit change to listeners
    props.onChange(evt.target.value)
  })

  // update value if the version changes
  useEffect(() => setValue(props.value), [props.version])

  // useEffect(() => {
  //   console.log('MarkdownEditor:mounted');
  //   return () => console.log("MarkdownEditor:UNMOUNT");
  // }, [])
  // console.log('MarkdownEditor:render');

  return (
    <textarea
      className={styles.Markdown}
      placeholder={props.placeholder}
      value={value}
      onInput={onInput}
    />
  );
}