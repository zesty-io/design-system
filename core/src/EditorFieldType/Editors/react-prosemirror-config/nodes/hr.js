import { getElementAttrs, GLOBAL_ATTRS } from "./index.js";

// :: NodeSpec A horizontal rule (`<hr>`).
export const hr = {
  group: "block",
  attrs: GLOBAL_ATTRS,
  parseDOM: [
    {
      tag: "hr",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["hr", node.attrs];
  }
};
