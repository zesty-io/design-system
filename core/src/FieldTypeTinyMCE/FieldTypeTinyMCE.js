import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import cx from "classnames";

// Import TinyMCE
import "tinymce/tinymce";

// A theme is also required
import "tinymce/themes/silver";

// Any plugins you want to use has to be imported
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/codesample";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/help";
import "tinymce/plugins/hr";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/paste";
import "tinymce/plugins/preview";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/spellchecker";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/wordcount";

import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeTinyMCE.less";
export const FieldTypeTinyMCE = React.memo(function FieldTypeTinyMCE(props) {
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
          id={props.name}
          initialValue={props.value}
          onChange={(evt, editor) => {
            props.onChange(props.name, evt.target.getContent(), props.datatype);
          }}
          init={{
            plugins: [
              "advlist advcode anchor autolink autoresize charmap codesample fullscreen help hr insertdatetime",
              "link lists media preview searchreplace spellchecker table visualblocks wordcount"
            ],

            // NOTE: premium plugins are being loaded from a self hosted location
            // specific to our application. Making this component not usable outside of our context.
            external_plugins: {
              advcode: "/ui/js/third_party/tinymce/plugins/advcode/plugin.js",
              powerpaste:
                "/ui/js/third_party/tinymce/plugins/powerpaste/plugin.js",
              formatpainter:
                "/ui/js/third_party/tinymce/plugins/formatpainter/plugin.js",
              pageembed:
                "/ui/js/third_party/tinymce/plugins/pageembed/plugin.js"
            },
            toolbar:
              "bold italic link backcolor | \
             alignleft aligncenter alignright alignjustify | formatselect | \
             bullist numlist outdent indent | zestyMediaApp media table charmap insertdatetime codesample | \
            code | pastetext removeformat | fullscreen help | undo redo",
            contextmenu: "link table spellchecker",

            // plugin settings
            powerpaste_word_import: "prompt",
            media_live_embeds: true,

            // editor settings
            min_height: 250,
            max_height: 2000,
            branding: false,
            menubar: false,
            extended_valid_elements: "script[src|async|defer|type|charset]",

            // custom toolbar buttons
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
