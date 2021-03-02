import React, { useEffect, useState } from "react";
// import showdown from "showdown";

// const converter = new showdown.Converter({
//   noHeaderId: true,
//   tables: true,
//   strikethrough: true,
//   // backslashEscapesHTMLTags: true
// });

import styles from "./Markdown.less";
export function MarkdownEditor(props) {
  // const [markdown, setMarkdown] = useState(props.value);

  // useEffect(() => {
  //   if (markdown !== props.value) {
  //     // console.log("mismatch", markdown, props.value);
  //     setMarkdown(props.value);
  //   }
  // }, [props.value]);

  return (
    <textarea
      className={styles.Markdown}
      onChange={(evt) => {
        // update internal state to check for change
        // on external prop in effect. User emmited value from
        // textarea should already be markdown, no need to convert
        // setMarkdown(evt.target.value);

        props.onChange(evt.target.value);
      }}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}
