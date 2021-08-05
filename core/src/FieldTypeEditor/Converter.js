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
  console.log('Converter:render');

  const onChange = (val) => {
    if (val === "<p></p>") {
      val = "";
    }

    if (props.editor === "markdown") {
      // When sendings changes to redux store convert to the initial field types value
      // This ensures if it's a markdown field that is being viewed as an html editor it is
      // still saved as markdown content
      val = convert.makeMarkdown(val);
    } else {
      val = convert.makeHtml(val);
    }

    if (props.onChange) {
      props.onChange(val, props.name, props.datatype);
    } else {
      throw new Error("Converter: Missing onChange handler")
    }
  }

  const selectEditor = (type) => {

    // Convert content on the way INTO the component
    const html = convert.makeHtml(props.value)
    const markdown = convert.makeMarkdown(props.value)

    switch (type) {
      case "wysiwyg_basic":
      case "wysiwyg_advanced":
        console.log('Converter:BasicEditor');
        return <BasicEditor value={html} version={props.version} onChange={onChange} />;

      case "markdown":
        return (
          <MarkdownEditor
            value={markdown}
            version={props.version}
            onChange={onChange}
          />
        );
      case "article_writer":
        console.log('Converter:InlineEditor');
        return (
          <InlineEditor value={html} version={props.version} onChange={onChange} />
        );

      case "html":
        console.log('Converter:html');
        return <HtmlEditor value={html} version={props.version} onChange={onChange} />;

      default:
        return (
          <div>
            <h1>Invalid Editor Mode</h1>
          </div>
        );
    }
  }

  return <Fragment>{selectEditor(props.editor)}</Fragment>
}
, (prevProps, nextProps) => {
  // only render if the version changes
  // otherwise all state is managed internally as needed
  // changes are emitted with onChange callback
  if (prevProps.version !== nextProps.version) {
    return false
  }

  return true
}
)




// export class Converter extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       html: convert.makeHtml(this.props.value),
//       markdown: convert.makeMarkdown(this.props.value),
//     };

//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(val) {
//     if (val === "<p></p>") {
//       val = "";
//     }

//     if (this.props.onChange) {
//       if (this.props.editor === "markdown") {
//         // When sendings changes to redux store convert to the initial field types value
//         // This ensures if it's a markdown field that is being viewed as an html editor it is
//         // still saved as markdown content
//         val = convert.makeMarkdown(val);
//         // this.setState({ markdown: val });
//       } else {
//         val = convert.makeHtml(val);
//         // this.setState({ html: val });
//       }

//       this.props.onChange(val, this.props.name, this.props.datatype);
//     }
//   }

//   render() {
//     // Convert content on the way INTO the component
//     switch (this.props.editor) {
//       case "wysiwyg_basic":
//       case "wysiwyg_advanced":
//         console.log('Converter:BasicEditor');

//         return <BasicEditor value={this.state.html} onChange={this.onChange} />;
//       case "markdown":
//         console.log('Converter:MarkdownEditor');

//         return (
//           <MarkdownEditor
//             value={this.state.markdown}
//             onChange={this.onChange}
//           />
//         );
//       case "article_writer":
//         console.log('Converter:InlineEditor');

//         return (
//           <InlineEditor value={this.state.html} onChange={this.onChange} />
//         );
//       case "html":
//         console.log('Converter:html');

//         return <HtmlEditor value={this.state.html} onChange={this.onChange} />;
//       default:
//         console.log('Converter:invalid');

//         return (
//           <div>
//             <h1>Invalid Editor</h1>
//           </div>
//         );
//     }
//   }
// }

// /**
//  * Handles conversion of content into and out of the component
//  * to the appropriate type of value (Markdown | HTML)
//  * @param {*} props
//  */
// export function Converter(props) {
//   const [markdown, setMarkdown] = useState(convert.makeMarkdown(props.value));
//   const [html, setHtml] = useState(convert.makeHtml(props.value));

//   //   useEffect(() => {
//   //     if (props.editor === "markdown") {
//   //       setMarkdown(convert.makeMarkdown(props.value));
//   //     } else {
//   //       setHtml(convert.makeHtml(props.value));
//   //     }

//   //     console.log("meta", convert.getMetadata(true), convert.getMetadataFormat());
//   //   }, [props.value]);

//   // Convert content on the way OUT the component
//   const onChange = (value) => {
//     // Prosemirror leaves a lingering p tag which is
//     // problematic for consumers who check for empty values
//     if (value === "<p></p>") {
//       value = "";
//     }

//     // Prosemirror triggers on change events when focusing in and out
//     // of the editor so check whether the value has changed.
//     // if (props.value !== value) {

//     if (props.onChange) {
//       // let storeContent = value;
//       // if (props.type === "markdown") {
//       //   if (editorType !== "markdown") {
//       //     storeContent = converter.makeMd(storeContent);
//       //   }
//       // } else {
//       //   if (editorType === "markdown") {
//       //     storeContent = converter.makeHtml(storeContent);
//       //   }
//       // }

//       if (props.editor === "markdown") {
//         // When sendings changes to redux store convert to the initial field types value
//         // This ensures if it's a markdown field that is being viewed as an html editor it is
//         // still saved as markdown content
//         value = convert.makeMarkdown(value);
//         setMarkdown(value);
//       } else {
//         value = convert.makeHtml(value);
//         setHtml(html);
//       }

//       props.onChange(value, props.name, props.datatype);
//     }

//     // }
//   };

//   // Convert content on the way INTO the component
//   switch (props.editor) {
//     case "wysiwyg_basic":
//     case "wysiwyg_advanced":
//       return <BasicEditor value={html} onChange={onChange} />;
//     case "markdown":
//       return <MarkdownEditor value={markdown} onChange={onChange} />;
//     case "article_writer":
//       return <InlineEditor value={html} onChange={onChange} />;
//     case "html":
//       return <HtmlEditor value={html} onChange={onChange} />;
//     default:
//       return (
//         <div>
//           <h1>Invalid Editor</h1>
//         </div>
//       );
//   }
// }
