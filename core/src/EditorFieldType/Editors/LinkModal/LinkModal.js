import React from "react";
import { Modal, ModalHeader, ModalContent, ModalFooter } from "../../../Modal";
import { Button } from "../../../Button";
import { TextFieldType } from "../../../TextFieldType";

import styles from "./LinkModal.less";
export class LinkModal extends React.PureComponent {
  url = React.createRef();
  state = {
    target: true,
    href: ""
  };
  componentDidMount() {
    this.url.current.querySelector("input").focus();
    document.addEventListener("keyup", this.onEnter);
  }
  componentDidUnmount() {
    document.removeEventListener("keyup", this.onEnter);
  }
  onEnter = evt => {
    if (evt.which == 13) {
      this.props.onClose(this.state);
    }
  };
  render() {
    return (
      <Modal
        type="local"
        className={styles.LinkModal}
        onClose={this.props.onClose}
      >
        <ModalContent>
          <TextFieldType
            innerRef={this.url}
            label="What url should this link to?"
            name="linkUrl"
            placeholder="https://"
            required="true"
            autofocus="true"
            onChange={(name, href) => this.setState({ href })}
          />
          <label>
            Open link in a new browser window?{" "}
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
            kind="save"
            disabled={this.state.href.length === 0}
            onClick={() => this.props.onClose(this.state)}
          >
            <i className="fa fa-plus" aria-hidden="true" />
            Insert Link
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
