import React from "react";
import { renderToString } from "react-dom/server";

import { Loader } from "../../dist/Loader";

test("Loader renders", () => {
  const el = React.createElement(Loader);
  const str = renderToString(el);
  expect(str).toBe(
    '<div class="loader--32LrG" data-reactroot=""><span class="bar--3kJWN"></span><span class="bar--3kJWN"></span><span class="bar--3kJWN"></span><span class="bar--3kJWN"></span><span class="bar--3kJWN"></span></div>'
  );
});
