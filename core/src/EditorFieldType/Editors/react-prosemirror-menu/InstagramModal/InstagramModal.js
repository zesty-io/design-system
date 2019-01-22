import React from "react";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from "../../../../Modal";
import { Button } from "../../../../Button";
import { TextFieldType } from "../../../../TextFieldType";

import styles from "./InstagramModal.less";
export class InstagramModal extends React.Component {
  state = {
    id: ""
  };

  render() {
    return (
      <Modal
        type="local"
        className={styles.InstagramModal}
        onClose={this.props.onClose}
      >
        <ModalHeader>
          <i className="fa fa-link" aria-hidden="true" />
          &nbsp;Embed Instagram Post
        </ModalHeader>
        <ModalContent>
          <TextFieldType
            label="Enter unique Instagram post ID"
            name="embedInstagram"
            placeholder="Post ID"
            required="true"
            autofocus="true"
            onChange={(name, id) => this.setState({ id })}
          />
        </ModalContent>
        <ModalFooter>
          <Button
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
