import { getElementAttrs, GLOBAL_ATTRS } from "./index.js";
export const script = {
  group: "inline", // Allow this node to be child of paragraph
  inline: true,
  attrs: {
    src: { default: null },
    type: { default: "text/javascript" },
    async: { default: null }
  },
  toDOM(node) {
    return ["script", node.attrs];
  },
  parseDOM: [
    {
      tag: "script",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ]
};
