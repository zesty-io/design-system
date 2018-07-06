import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Search } from "../../dist/Search";

test("Search renders", () => {
  // console.log(Search.Search)

  const el = React.createElement(Search, null);
  console.log(el);

  const str = renderToStaticMarkup(Search);
  console.log("Search: ", str);

  // expect(str).toBe('<button class="button--qXZ5J" data-reactroot=""></button>');
});
