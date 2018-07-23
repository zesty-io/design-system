import React from "react";
import ReactDOM from "react-dom";
import App from "./views/app";

ReactDOM.render(
  <App
    components={[
      "Button",
      "Button Group",
      "Card",
      "Divider",
      "Loader",
      "Search",
      "Select",
      "Input",
      "Toggle",
      "Infotip",
      "TextFieldType",
      "NumberFieldType",
      "ColorFieldType",
      "Nav"
    ]}
  />,
  document.getElementById("root")
);
