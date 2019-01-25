import React from "react";
import cx from "classnames";

import { Button } from "../Button";

import styles from "./Modal.less";
export class Modal extends React.Component {
  constructor(props) {
    super(props);
    if (!props.onClose) {
      throw new Error("Modal component is missing required `onClose` property");
    }
  }
  componentDidMount() {
    window.addEventListener("keypress", this.onEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keypress", this.onEsc);
  }
  onEsc = evt => {
    if (evt.key === "Escape" || evt.keyCode == 27) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <section
        className={cx(
          styles.ModalWrap,
          this.props.type === "local" ? styles.ModalLocal : styles.ModalGlobal
        )}
      >
        <article className={cx(styles.Modal, this.props.className)}>
          <Button className={styles.Close} onClick={this.props.onClose}>
            <i className="fa fa-times" aria-hidden="true" />
          </Button>
          {this.props.children}
        </article>
      </section>
    );
  }
}

export function ModalHeader(props) {
  return (
    <header className={cx(styles.ModalHeader, props.className)}>
      {props.children}
    </header>
  );
}

export function ModalContent(props) {
  return (
    <main {...props} className={cx(styles.ModalContent, props.className)}>
      {props.children}
    </main>
  );
}

export function ModalFooter(props) {
  return (
    <footer className={cx(styles.ModalFooter, props.className)}>
      {props.children}
    </footer>
  );
}
