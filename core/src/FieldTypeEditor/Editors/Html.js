import React, { useEffect, useState } from "react";
import styles from "./Html.less";
import { html } from "js-beautify";
// import showdown from "showdown";

import { Controlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/htmlmixed/htmlmixed");

// const converter = new showdown.Converter({
//   noHeaderId: true,
//   tables: true,
//   strikethrough: true,
//   // backslashEscapesHTMLTags: true
// });

function parse(str = "") {
  // ensure string is html
  // str = converter.makeHtml(str);

  const formated = html(str, {
    indent_size: 2,
  });

  return formated;
}

export function HtmlEditor(props) {
  // const [parsed, setParsed] = useState(parse(props.value));

  // useEffect(() => {
  //   if (parsed !== props.value) {
  //     setParsed(parse(props.value));
  //   }
  // }, [props.value]);


  useEffect(() => {
    console.log('HtmlEditor:mounted');
    return () => console.log("HtmlEditor:UNMOUNT");
  }, [])
  console.log('HtmlEditor:render')

  return (
    <CodeMirror
      className={styles.Html}
      value={parse(props.value)}
      options={{
        autoCursor: false,
        mode: "htmlmixed",
        // theme: "material",
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => {
        setParsed(value.trim());
      }}
      onChange={(editor, data, value) => {
        if (props.onChange) {
          props.onChange(value.trim());
        }
      }}
    />
  );
}
