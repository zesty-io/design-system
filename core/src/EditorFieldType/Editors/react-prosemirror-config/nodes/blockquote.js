import { getElementAttrs, GLOBAL_ATTRS } from "./index.js";

// :: NodeSpec A blockquote (`<blockquote>`) wrapping one or more blocks.
export const blockquote = {
  content: "block+",
  group: "block",
  defining: true,
  attrs: GLOBAL_ATTRS,
  parseDOM: [
    {
      tag: "blockquote",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["blockquote", node.attrs, 0];
  }
};
