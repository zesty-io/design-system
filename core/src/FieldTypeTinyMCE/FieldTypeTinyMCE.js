import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import cx from "classnames";

import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeTinyMCE.less";
export const FieldTypeTinyMCE = React.memo(function FieldTypeTinyMCE(props) {
  // console.log("FieldTypeTinyMCE:render", props);

  return (
    <div className={cx(styles.FieldTypeTinyMCE, props.className)}>
      <label className={styles.FieldTypeTinyMCELabel}>
        <FieldLabel
          label={props.label}
          required={props.required}
          tag={props.tag}
          tooltip={props.tooltip}
        />
      </label>
      <div className={styles.FieldTypeTinyMCEPM}>
        <Editor
          apiKey="aa98mombuib42aeoxsf9k0spoehkdor9ybohg4vcllrgqcm4"
          id={props.name}
          initialValue={props.value}
          init={{
            menubar: false,
            plugins: [
              "advlist anchor autolink charmap code codesample fullscreen hr lists link",
              "image print preview searchreplace table visualblocks fullscreen",
              "insertdatetime media table paste help wordcount"
              // "autoresize",
              // "formatpainter pageembed" //premium plugins
            ],
            toolbar:
              "bold italic link backcolor | \
             alignleft aligncenter alignright alignjustify | formatselect | \
             bullist numlist outdent indent | table charmap insertdatetime | \
             image | code codesample | removeformat | fullscreen help | undo redo",
            // menubar: "view",
            contextmenu: "link image imagetools table spellchecker",
            // height: 250,
            min_height: 250,
            max_height: 1500,
            contextmenu: "link image imagetools table spellchecker"
          }}
          onChange={(evt, editor) => {
            props.onChange(props.name, evt.target.getContent(), props.datatype);
          }}
        />
      </div>

      {props.description && (
        <FieldDescription description={props.description} />
      )}
    </div>
  );
});
