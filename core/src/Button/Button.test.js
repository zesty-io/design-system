import React from "react";
import { renderToString } from "react-dom/server";
import renderer from "react-test-renderer";

import { Button } from "../../dist/Button";

test("Button renders", () => {
  // const el = React.createElement(Button);
  // const str = renderToString(el);
  // expect(str).toBe('<button class="button--qXZ5J" data-reactroot=""></button>');

  const component = renderer.create(<Button />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
