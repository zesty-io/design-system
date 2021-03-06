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
import "tinymce/plugins/code"; //advcode requires this core plugin
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
// import "tinymce/plugins/image";
// import "tinymce/plugins/imagetools";

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
          onChange={(evt) => {
            props.onChange(evt.target.getContent(), props.name, props.datatype);
          }}
          onKeyDown={(evt, editor) => {
            // TinyMCE onChange is inconsistent as it is only invoked when an "undoable" event occurs.
            // so we are use the onKeyDown as well. We check to make sure the content has changed, this
            // way we avoid updating on events like keyboard navigation
            const nextContent = editor.getContent();
            if (nextContent !== props.value) {
              props.onChange(editor.getContent(), props.name, props.datatype);
            }
          }}
          init={{
            plugins: [
              "advlist advcode anchor autolink charmap codesample fullscreen help hr insertdatetime",
              "link lists media preview searchreplace spellchecker table visualblocks wordcount",
            ],

            // NOTE: premium plugins are being loaded from a self hosted location
            // specific to our application. Making this component not usable outside of our context.
            external_plugins: props.externalPlugins,
            toolbar:
              "italic bold subscript superscript underline strikethrough link backcolor | \
             alignleft aligncenter alignright alignjustify clearfloat | formatselect | \
             codesample blockquote bullist numlist outdent indent | \
             table zestyMediaApp media embed charmap insertdatetime | \
             pastetext removeformat | fullscreen code help | undo redo",
            contextmenu: "bold italic link | copy paste",

            relative_urls: false,
            // plugin settings
            powerpaste_word_import: "prompt",
            // media_live_embeds: true,
            image_advtab: true,

            // file_picker_callback: (callback, value, meta) => {
            //   console.log(callback, value, meta);
            // },

            // imagetools_proxy: "path/to/proxy",
            // imagetools_toolbar: "imageoptions",
            // imagetools_fetch_image: function(img) {
            //   console.log("IMAGE", img);
            //   return new tinymce.util.Promise(function(resolve) {
            //     // Fetch the image and return a blob containing the image content
            //     fetch(img.src, {
            //       mode: "no-cors",
            //       cache: "no-cache"
            //     })
            //       .then(res => res.blob())
            //       .then(blob => resolve(blob));
            //   });
            // },

            // editor settings
            branding: false,
            menubar: false,
            object_resizing: true,

            // Allows for embeds with script tags
            // extended_valid_elements: "script[src|async|defer|type|charset]",
            valid_elements: "*[*]",

            // Autoresizer does not work with the resize handle.
            // Therefore we opt for the resize handle over auto resizing
            resize: true,
            min_height: 800,
            // max_height: 2000,

            // theme: "silver",
            // theme_url: "/ui/js/third_party/tinymce/themes/silver/theme.min.js",
            skin: props.skin,
            skin_url: props.skinURL,

            // If a content_css file is not provided tinymce will attempt
            // loading the default which is not available
            content_css: props.contentCSS,

            // Customize editor buttons and actions
            setup: function (editor) {
              /**
               * Handle save key command
               */
              editor.shortcuts.add("ctrl+s", "Save item", props.onSave);

              /**
               * This does not work as the resizing action provides an element with the data attributes striped
               * so we lose context on this image ZUID, preventing modify calls to the media service
               */
              // Request resized image from media service
              // editor.on("ObjectResized", function(evt) {
              //   evt.target.src = `http://svc.zesty.localdev:3007/media-resolver-service/resolve/${evt.target.dataset.id}/getimage/?w=${evt.width}&h=${evt.height}`;
              // });

              /**
               * Clear Float Button
               */
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
                onAction: function (_) {
                  editor.insertContent("<p style='clear:both;'>&nbsp;</p>");
                },
              });

              /**
               * Zesty Media App Button
               */
              editor.ui.registry.addButton("zestyMediaApp", {
                icon: "image",
                tooltip: "Select media from your uploaded assets",
                onAction: function () {
                  props.mediaBrowser({
                    limit: 10,
                    callback: (images) => {
                      editor.insertContent(
                        images
                          .map((image) => {
                            return `<img src="${image.url}" data-id="${image.id}" title="${image.title}" alt="${image.title}" />`;
                          })
                          .join(" ")
                      );
                    },
                  });
                },
              });

              /**
               * Custom Embed Button
               */
              editor.ui.registry.addButton("embed", {
                text: "embed",
                onAction: function () {
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
                            { text: "Twitframe", value: "twitframe" },
                          ],
                        },
                        {
                          type: "input",
                          name: "id",
                          label: "Unique Post ID",
                        },
                      ],
                    },
                    buttons: [
                      {
                        type: "cancel",
                        text: "Close",
                      },
                      {
                        type: "submit",
                        text: "Save",
                        primary: true,
                      },
                    ],
                    onSubmit: function (api) {
                      const data = api.getData();

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
                    },
                  });
                },
              });
            },
          }}
        />
      </div>

      {props.description && (
        <FieldDescription description={props.description} />
      )}
    </div>
  );
});
