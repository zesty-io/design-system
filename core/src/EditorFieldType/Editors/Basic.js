import React from "react";

// import { HtmlEditor } from "@aeaton/react-prosemirror";
import { HtmlEditor } from "./react-prosemirror/HtmlEditor";
// import { MenuBar } from "@aeaton/react-prosemirror";
import { MenuBar } from "./react-prosemirror/MenuBar";

import { LinkModal } from "./LinkModal";
import { EmbedModal } from "./EmbedModal";

import { schema } from "./react-prosemirror-schema";
import { plugins } from "./react-prosemirror-plugins";
import { menu } from "./react-prosemirror-menu";

import { ImageResizeView } from "./prosemirror-views/ImageResizeView";
import { IframeResizeView } from "./prosemirror-views/IframeResizeView";
import { VideoResizeView } from "./prosemirror-views/VideoResizeView";

import styles from "./Basic.less";
export class BasicEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinkModal: false,
      showEmbedModal: false
    };
  }
  componentDidMount() {
    zesty.on("PROSEMIRROR_DIALOG_OPEN", this.onModalOpen);
    zesty.on("PROSEMIRROR_DIALOG_CLOSE", this.onModalClose);
  }
  componentDidUnmount() {
    zesty.off("PROSEMIRROR_DIALOG_OPEN", this.onModalOpen);
    zesty.off("PROSEMIRROR_DIALOG_CLOSE", this.onModalClose);
  }

  onModalOpen = (name, options) =>
    this.setState({
      [name]: true,
      [`${name}Options`]: options
    });
  onModalClose = name => this.setState({ [name]: false });

  render() {
    return (
      <div className={styles.BasicEditor}>
        <HtmlEditor
          options={{ plugins, schema }}
          value={this.props.value}
          onChange={this.props.onChange}
          render={({ editor, view }) => (
            <div>
              {this.state.showLinkModal && <LinkModal view={view} />}
              {this.state.showEmbedModal && (
                <EmbedModal
                  options={this.state.showEmbedModalOptions}
                  view={view}
                />
              )}
              <MenuBar menu={menu} view={view} />
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
