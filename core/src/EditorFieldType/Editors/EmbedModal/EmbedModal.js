import React from "react";

import { Modal, ModalHeader, ModalContent, ModalFooter } from "../../../Modal";
import { TextFieldType } from "../../../TextFieldType";
import { Button } from "../../../Button";
import { Url } from "../../../Url";

import styles from "./EmbedModal.less";
export class EmbedModal extends React.Component {
  state = {
    id: ""
  };
  render() {
    return (
      <Modal
        type="local"
        className={styles.EmbedModal}
        onClose={this.props.onClose}
      >
        <ModalContent>
          {this.props.service === "Twitframe" && (
            <h1>
              <i className="fa fa-exclamation-triangle" aria-hidden="true" />
              &nbsp;
              <Url href="https://twitframe.com/" target="_blank">
                Twitframe
              </Url>{" "}
              embeds require the full URL for the tweet you would like to embed.
            </h1>
          )}
          <TextFieldType
            label={`Enter unique ${this.props.service} ID`}
            name="embed"
            placeholder="e.g. puXYPrrsrA"
            required="true"
            autofocus="true"
            onChange={(name, id) => this.setState({ id })}
          />
        </ModalContent>
        <ModalFooter>
          <Button
            kind="save"
            disabled={this.state.id.length === 0}
            onClick={() => this.props.onClose(this.state)}
          >
            <i className="fa fa-plus" aria-hidden="true" />
            Insert Embed
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
