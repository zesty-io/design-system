import React from "react";
import { renderToString } from "react-dom/server";

import { ButtonGroup } from "../../dist/ButtonGroup";

test("ButtonGroup renders", () => {
  const el = React.createElement(ButtonGroup);
  const str = renderToString(el);
  expect(str).toBe('<div class="ButtonGroup--2n47j" data-reactroot=""></div>');
});
