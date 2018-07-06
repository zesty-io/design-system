import React from "react";
import { renderToString } from "react-dom/server";

import { Search } from "../../dist/Search";

// Need to fix button dependency in component
xtest("Search renders", () => {
  const el = React.createElement(Search);
  console.log(el);

  const str = renderToString(el);
  console.log("Search: ", str);

  // expect(str).toBe('<button class="button--qXZ5J" data-reactroot=""></button>');
});
