import React from "react";
import styles from "./Html.less";

export class HtmlEditor extends React.Component {
  onChange = evt => {
    const value = evt.target.value;
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    return (
      <textarea
        className={styles.Html}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        defaultValue={this.props.value}
      />
    );
  }
}
