import React, { Component } from "react";

import "../../core/src/NumberFieldType/NumberFieldType.less";
import { NumberFieldType } from "../../core/src/NumberFieldType";

export class NumberFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <NumberFieldType label="Title Field" charCount="150" />
      </React.Fragment>
    );
  }
}
