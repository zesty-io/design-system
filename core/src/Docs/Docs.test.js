import React from "react";
import { renderToString } from "react-dom/server";

import { Docs } from "../../dist/Docs";

test("Docs renders", () => {
  const el = React.createElement(Docs);
  const str = renderToString(el);
  expect(str).toBe('<div class="Docs--1n47j" data-reactroot=""></div>');
});
