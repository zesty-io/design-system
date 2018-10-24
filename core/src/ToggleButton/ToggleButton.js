import React, { Component } from "react";
import styles from "./ToggleButton.less";

export class ToggleButton extends Component {
  state = {
    selected: this.props.default || false
  };
  render() {
    const { disabled, offValue, onValue } = this.props;
    return (
      <article className={styles.ToggleButton}>
        <section
          className={`${styles.off} ${
            this.state.selected === false ? styles.Selected : null
          } ${disabled ? styles.disabled : null}`}
          onClick={() =>
            !disabled &&
            this.setState({ selected: false }, () => {
              if (this.props.onChange) {
                this.props.onChange(this.state.selected);
              }
            })
          }
        >
          <p>{offValue || "Off"}</p>
        </section>
        <section
          className={`${styles.on} ${
            this.state.selected === true ? styles.Selected : null
          } ${disabled ? styles.disabled : null}`}
          onClick={() =>
            !disabled &&
            this.setState({ selected: true }, () => {
              if (this.props.onChange) {
                this.props.onChange(this.state.selected);
              }
            })
          }
        >
          <p>{onValue || "On"}</p>
        </section>
      </article>
    );
  }
}
