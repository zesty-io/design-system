import React, { Component } from "react";

import "../../core/src/TextFieldType/TextFieldType.less";
import { TextFieldType } from "../../core/src/TextFieldType";

export class TextFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <TextFieldType label="Title Field" charCount="150" />
      </React.Fragment>
    );
  }
}
