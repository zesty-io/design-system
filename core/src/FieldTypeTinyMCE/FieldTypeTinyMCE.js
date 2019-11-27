import React from "react";
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
          onChange={(evt, editor) => {
            props.onChange(props.name, evt.target.getContent(), props.datatype);
          }}
          init={{
            menubar: false,
            plugins: [
              "advlist anchor autolink charmap code codesample fullscreen hr lists link",
              "preview searchreplace table visualblocks fullscreen",
              "insertdatetime table paste help wordcount",
              "autoresize"
              // "formatpainter pageembed" //premium plugins
            ],
            toolbar:
              "bold italic link backcolor | \
             alignleft aligncenter alignright alignjustify | formatselect | \
             bullist numlist outdent indent | zestyMediaApp table charmap insertdatetime | \
            code codesample | removeformat | fullscreen help | undo redo",
            contextmenu: "link table spellchecker",
            // height: 250,
            min_height: 250,
            max_height: 2000,
            setup: function(editor) {
              editor.ui.registry.addButton("zestyMediaApp", {
                icon: "image",
                tooltip: "Select media from your uploaded assets",
                onAction: function(_) {
                  riot.mount(
                    document.querySelector("#modalMount"),
                    "media-app-modal",
                    {
                      limit: 10,
                      callback: images => {
                        editor.insertContent(
                          images
                            .map(image => {
                              return `<img src="${image.url}" alt="${image.title}" />`;
                            })
                            .join(" ")
                        );
                      }
                    }
                  );
                }
              });
            }
          }}
        />
      </div>

      {props.description && (
        <FieldDescription description={props.description} />
      )}
    </div>
  );
});
