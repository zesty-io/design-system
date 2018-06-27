import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./menu.less";

export default class Menu extends Component {
  render() {
    return (
      <ul className={styles.list}>
        {Object.keys(this.props.components).map((comp, i) => {
          return (
            <Link to={`/${comp.toLowerCase()}`} key={i}>
              <li>{comp}</li>
            </Link>
          );
        })}
      </ul>
    );
  }
}
