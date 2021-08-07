import React, { Fragment } from "react";
import showdown from "showdown";

import { BasicEditor } from "./Editors/Basic.js"; // Covers both WYSIWYGBasic & WYSIWYGAdvanced field types
import { InlineEditor } from "./Editors/Inline.js";
import { MarkdownEditor } from "./Editors/Markdown.js";
import { HtmlEditor } from "./Editors/Html.js";

export const convert = new showdown.Converter({
  noHeaderId: true,
  tables: true,
  strikethrough: true,
  // backslashEscapesHTMLTags: true
});

export const Converter = React.memo(function Converter(props) {

  // broadcast formated changes to listeners
  const onChange = (val) => {
    if (val === "<p></p>") {
      val = "";
    }

    // When sendings changes to redux store convert to the initial field datatype value
    // This ensures if it's a markdown field that is being viewed as an html editor it is
    // still saved as markdown content
    if (props.datatype === "markdown" && props.editor !== "markdown") {
      val = convert.makeMarkdown(val);
    } else {
      val = convert.makeHtml(val);
    }

    console.log('onChange', props.datatype, val);

    props.onChange(val, props.name, props.datatype);
  }

  let content = props.value

  // Based on selected editor convert content on the way into the component
  // if markdown datatype but in a different editor mode convert to html
  // works in tandem with formating during onChange function
  if (props.datatype === "markdown" && props.editor !== "markdown") {
    content = convert.makeHtml(props.value)
  }
  if (props.datatype !== "markdown" && props.editor === "markdown") {
    content = convert.makeMarkdown(props.value)
  }

  // useEffect(() => {
  //   console.log('Converter:mounted');
  //   return () => console.log("Converter:UNmounted");
  // }, [])

  // console.log('Converter:render', props.datatype, props.editor);

  return <Fragment>
    {props.editor === "wysiwyg_basic" && <BasicEditor value={content} version={props.version} mediaBrowser={props.mediaBrowser} onChange={onChange} />}
    {props.editor === "article_writer" && <InlineEditor value={content} version={props.version} mediaBrowser={props.mediaBrowser} onChange={onChange} />}
    {props.editor === "markdown" && <MarkdownEditor value={content} version={props.version} onChange={onChange} />}
    {props.editor === "html" && <HtmlEditor value={content} version={props.version} onChange={onChange} />}
  </Fragment>
})
