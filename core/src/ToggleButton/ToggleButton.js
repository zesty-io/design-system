import React, { Component } from "react";
import styles from "./ToggleButton.less";

export class ToggleButton extends Component {
  state = {
    selected: this.props.default || false
  };
  render() {
    return (
      <article className={styles.ToggleButton}>
        <section
          className={`${styles.off} ${
            this.state.selected === false ? styles.Selected : null
          }`}
          onClick={() => this.setState({ selected: false })}
        >
          <p>{this.props.offValue || "Off"}</p>
        </section>
        <section
          className={`${styles.on} ${
            this.state.selected === true ? styles.Selected : null
          }`}
          onClick={() => this.setState({ selected: true })}
        >
          <p>{this.props.onValue || "On"}</p>
        </section>
      </article>
    );
  }
}
