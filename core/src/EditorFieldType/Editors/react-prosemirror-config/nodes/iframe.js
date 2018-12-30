import { getElementAttrs, GLOBAL_ATTRS } from "./index.js";
export const iframe = {
  group: "inline", // Allow this node to be child of paragraph
  inline: true,
  attrs: {
    ...GLOBAL_ATTRS,
    src: { default: null },
    height: { default: null },
    scrolling: { default: null },
    frameborder: { default: null },
    "data-instgrm-payload-id": { default: null }
  },
  toDOM(node) {
    return ["iframe", node.attrs];
  },
  parseDOM: [
    {
      tag: "iframe",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ]
};
