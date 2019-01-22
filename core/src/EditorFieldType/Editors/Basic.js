import React from "react";

import { HtmlEditor } from "@aeaton/react-prosemirror";
// import {HtmlEditor} from "./react-prosemirror/HtmlEditor";
// import { MenuBar } from "@aeaton/react-prosemirror";
import { MenuBar } from "./react-prosemirror/MenuBar";

import { LinkModal } from "./LinkModal";
import { EmbedModal } from "./EmbedModal";

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
      menu: generateMenu({
        onModalOpen: this.onModalOpen,
        onModalClose: this.onModalClose
      }),
      modals: {
        link: {
          show: false
        },
        embed: {
          show: false
        }
      }
    };
  }

  onModalOpen = (type, callback, options) => {
    this.setState({
      modals: {
        ...this.state.modals,
        [type]: {
          show: true,
          callback,
          options
        }
      }
    });
  };

  onModalClose = (type, values) => {
    this.setState({
      modals: {
        ...this.state.modals,
        [type]: {
          ...this.state.modals[type],
          show: false
        }
      }
    });

    if (typeof this.state.modals[type].callback !== "function") {
      throw new Error("BasicEditor: Missing modal close callback");
    }

    this.state.modals[type].callback(values, this.state.modals[type].options);
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
              {this.state.modals.link.show && (
                <LinkModal
                  {...this.state.modals.link.options}
                  onClose={values => this.onModalClose("link", values)}
                />
              )}

              {this.state.modals.embed.show && (
                <EmbedModal
                  {...this.state.modals.embed.options}
                  onClose={values => this.onModalClose("embed", values)}
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
