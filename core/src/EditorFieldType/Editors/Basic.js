import React from "react";

import { HtmlEditor } from "@aeaton/react-prosemirror";
// import { MenuBar } from "@aeaton/react-prosemirror";

import { MenuBar } from "./react-prosemirror/MenuBar";
// import { Modal } from "./react-prosemirror/Modal";
// import { Modal } from "../../Modal";

import { LinkModal } from "./react-prosemirror-menu/LinkModal";

import { schema } from "./react-prosemirror-schema";
import { plugins } from "./react-prosemirror-plugins";
import { generateMenu } from "./react-prosemirror-menu";

import { ImageResizeView } from "./prosemirror-views/ImageResizeView";
import { IframeResizeView } from "./prosemirror-views/IframeResizeView";
import { VideoResizeView } from "./prosemirror-views/VideoResizeView";

import styles from "./Basic.less";
export class BasicEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinkModal: false,
      showInstagramModal: false,
      menu: generateMenu({
        onLinkModal: this.onLinkModal,
        onInstagramModal: this.onInstagramModal
      })
    };
  }

  onLinkModal = (action, values) => {
    if (action === "open") {
      this.setState({
        showLinkModal: true,
        modalCloseCallback: values
      });
    } else {
      this.setState({
        showLinkModal: false
      });

      if (typeof this.state.modalCloseCallback !== "function") {
        throw new Error("BasicEditor: Missing modal close callback");
      }

      this.state.modalCloseCallback(values);
    }
  };

  render() {
    return (
      <div className={styles.BasicEditor}>
        <HtmlEditor
          options={{ plugins, schema }}
          value={this.props.value}
          onChange={this.props.onChange}
          render={({ editor, view }) => (
            <div>
              {this.state.showLinkModal && (
                <LinkModal onClose={values => this.onModal("close", values)} />
              )}

              {this.state.showInstagramModal && (
                <InstagramModal
                  onClose={values => this.onModal("close", values)}
                />
              )}

              <MenuBar menu={this.state.menu} view={view} />
              {editor}
            </div>
          )}
          nodeViews={{
            image(node, view, getPos) {
              return new ImageResizeView(node, view, getPos);
            },
            iframe(node, view, getPos) {
              return new IframeResizeView(node, view, getPos);
            },
            video(node, view, getPos) {
              return new VideoResizeView(node, view, getPos);
            }
          }}
        />
      </div>
    );
  }
}
