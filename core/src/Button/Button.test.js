import React from "react";
import { renderToString } from "react-dom/server";

import { Button } from "../../dist/Button";

test("Button renders", () => {
  const el = React.createElement(Button);
  const str = renderToString(el);
  expect(str).toBe('<button class="button--qXZ5J" data-reactroot=""></button>');
});
