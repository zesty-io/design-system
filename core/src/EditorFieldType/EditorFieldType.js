import React from "react";
import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror";
import { options, menu } from "@aeaton/react-prosemirror-config-default";
import cx from "classnames";

import styles from "./EditorFieldType.less";

export function EditorFieldType(props) {
  return (
    <div className={cx(styles.EditorFieldType, props.className)}>
      <label className={styles.EditorFieldTypeLabel}>{props.label}</label>
      <div className={styles.EditorFieldTypePM}>
        <HtmlEditor
          options={{ ...options, floatingMenu: false }}
          value={props.value}
          onChange={props.onChange}
          render={({ editor, state, dispatch }) => (
            <div>
              <MenuBar menu={menu} state={state} dispatch={dispatch} />
              {editor}
            </div>
          )}
        />
      </div>
    </div>
  );
}

// import React from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import styles from "./EditorFieldType.less";
//
// export class EditorFieldType extends React.Component {
//   handleEditorChange = evt => {
//     if (this.props.onChange) {
//       // getContent() appears to do some event
//       // batching and may cause problems
//       this.props.onChange(
//         this.props.name,
//         evt.target.getContent(),
//         this.props.name
//       );
//     }
//   };
//
//   render() {
//     return (
//       <article className={styles.EditorFieldType}>
//         <label className={styles.EditorFieldTypeLabel}>
//           {this.props.label}
//         </label>
//         <Editor
//           initialValue={this.props.value || ""}
//           init={{
//             plugins: "link image code",
//             toolbar: this.props.datatype.includes("advanced")
//               ? "undo redo | bold italic | link image | alignleft aligncenter alignright | code | styleselect"
//               : "undo redo | bold italic | alignleft aligncenter alignright | code"
//           }}
//           onChange={this.handleEditorChange}
//         />
//       </article>
//     );
//   }
// }
