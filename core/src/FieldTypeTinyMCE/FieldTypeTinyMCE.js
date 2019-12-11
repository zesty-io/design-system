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
              // mediaembed:
              //   "/ui/js/third_party/tinymce/plugins/mediaembed/plugin.js"
            },
            toolbar:
              "italic bold subscript superscript underline strikethrough link backcolor | \
             alignleft aligncenter alignright alignjustify clearfloat | formatselect | \
             codesample blockquote bullist numlist outdent indent | table zestyMediaApp media embed charmap insertdatetime | \
             pastetext removeformat | fullscreen code help | undo redo",
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
              editor.shortcuts.add("ctrl+s", "Save item", props.onSave);

              editor.ui.registry.addIcon(
                "return",
                `<?xml version="1.0" encoding="iso-8859-1"?>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="22px"
                   viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
                  <g>
                    <path d="M12,2.147H7v2h5c1.103,0,2,0.897,2,2s-0.897,2-2,2H3.414l2.293-2.293L4.293,4.44l-4,4c-0.391,0.391-0.391,1.023,0,1.414
                      l4,4l1.414-1.414l-2.293-2.293H12c2.206,0,4-1.794,4-4S14.206,2.147,12,2.147z"/>
                  </g>
                </svg>`
              );

              editor.ui.registry.addButton("clearfloat", {
                icon: "return",
                tooltip:
                  "Insert new element to clear previously floated elements",
                onAction: function(_) {
                  editor.insertContent("<p style='clear:both;'>&nbsp;</p>");
                }
              });

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

              editor.ui.registry.addButton("embed", {
                text: "embed",
                onAction: function() {
                  editor.windowManager.open({
                    title: "Embed Social Media",
                    body: {
                      type: "panel",
                      items: [
                        {
                          type: "selectbox",
                          name: "service",
                          label: "Service",
                          items: [
                            { text: "Instagram", value: "instagram" },
                            { text: "YouTube", value: "youtube" },
                            { text: "Twitframe", value: "twitframe" }
                          ]
                        },
                        {
                          type: "input",
                          name: "id",
                          label: "Unique Post ID"
                        }
                      ]
                    },
                    buttons: [
                      {
                        type: "cancel",
                        text: "Close"
                      },
                      {
                        type: "submit",
                        text: "Save",
                        primary: true
                      }
                    ],
                    onSubmit: function(api) {
                      const data = api.getData();

                      console.log("dialog", data);

                      let iframe = "";
                      switch (data.service) {
                        case "instagram":
                          iframe = `<iframe src="https://instagram.com/p/${data.id}/embed/captioned" height="600px" width="500px"></iframe>`;
                          break;
                        case "youtube":
                          iframe = `<iframe src="https://www.youtube.com/embed/${data.id}?modestbranding=1&rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" height="315px" width="560px"></iframe>`;
                          break;
                        case "twitframe":
                          iframe = `<iframe src="https://twitframe.com/show?url=${encodeURI(
                            data.id
                          )}" height="315px" width="560px"></iframe>`;
                          break;
                        default:
                          iframe = `<iframe src="" height="315px" width="560px"></iframe>`;
                      }

                      // Insert content when the window form is submitted
                      editor.insertContent(iframe);
                      api.close();
                    }
                  });
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
