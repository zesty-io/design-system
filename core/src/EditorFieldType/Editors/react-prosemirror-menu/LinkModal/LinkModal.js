import React from "react";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from "../../../../Modal";
import { Button } from "../../../../Button";
import { TextFieldType } from "../../../../TextFieldType";

import styles from "./LinkModal.less";
export class LinkModal extends React.Component {
  state = {
    target: true,
    href: ""
  };
  render() {
    return (
      <Modal
        type="local"
        className={styles.LinkModal}
        onClose={this.props.onClose}
      >
        <ModalHeader>
          <i className="fa fa-link" aria-hidden="true" />
          &nbsp;Insert Link
        </ModalHeader>
        <ModalContent>
          <TextFieldType
            label="What url should this link to?"
            name="linkUrl"
            placeholder="https://"
            required="true"
            onChange={(name, href) => this.setState({ href })}
          />
          <label>
            Open in a new window?{" "}
            <Input
              name="linkTarget"
              type="checkbox"
              checked={this.state.target ? true : false}
              onChange={() => this.setState({ target: !this.state.target })}
            />
          </label>
        </ModalContent>
        <ModalFooter>
          <Button
            disabled={this.state.href.length === 0}
            onClick={() => this.props.onClose(this.state)}
          >
            <i className="fa fa-plus" aria-hidden="true" />
            Add Link
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
