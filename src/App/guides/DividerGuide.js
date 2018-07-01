import React, { Component } from "react";

import "@zesty-io/core/Divider.css";
import { Divider } from "@zesty-io/core/Divider";

import styles from "./DividerGuide.less";

export default class DividerGuide extends Component {
  render() {
    return (
      <div className={styles.divider}>
        <Divider />
        vulputate eu scelerisque felis imperdiet
        <Divider />
        pretium nibh ipsum consequat nisl
        <Divider />
        egestas sed sed risus pretium
        <Divider />
      </div>
    );
  }
}
