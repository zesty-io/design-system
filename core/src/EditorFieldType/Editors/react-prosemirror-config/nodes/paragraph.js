import { getElementAttrs, GLOBAL_ATTRS } from "./index.js";

// :: NodeSpec A plain paragraph textblock. Represented in the DOM
// as a `<p>` element.
export const paragraph = {
  content: "inline*",
  group: "block",
  attrs: { ...GLOBAL_ATTRS },
  parseDOM: [
    {
      tag: "p",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["p", node.attrs, 0];
  }
};
