import React, { Component } from "react";
import styles from "./ToggleButton.less";

export class ToggleButton extends Component {
  state = {
    selected: this.props.value || 0
  };
  render() {
    const {
      disabled,
      offValue,
      onValue,
      datatype,
      name,
      onChange
    } = this.props;
    const { selected } = this.state;
    return (
      <article className={styles.ToggleButton}>
        <section
          className={`${styles.off} ${
            selected === 0 ? styles.Selected : null
          } ${disabled ? styles.disabled : null}`}
          onClick={() =>
            !disabled &&
            this.setState({ selected: 0 }, () => {
              if (onChange) {
                onChange(name, 0, datatype);
              }
            })
          }
        >
          <p>{offValue || "Off"}</p>
        </section>
        <section
          className={`${styles.on} ${selected === 1 ? styles.Selected : null} ${
            disabled ? styles.disabled : null
          }`}
          onClick={() =>
            !disabled &&
            this.setState({ selected: 1 }, () => {
              if (onChange) {
                onChange(name, 1, datatype);
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
