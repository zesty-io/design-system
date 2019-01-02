import { getElementAttrs, attributes } from "./index.js";
export const iframe = {
  group: "inline", // Allow this node to be child of paragraph
  inline: true,
  attrs: {
    ...attributes(),
    src: { default: null },
    height: { default: null },
    width: { default: null },
    scrolling: { default: null },
    frameborder: { default: null },
    allowfullscreen: { default: null },
    "data-instgrm-payload-id": { default: null }
  },
  toDOM(node) {
    return ["iframe", node.attrs];
  },
  parseDOM: [
    {
      tag: "iframe",
      getAttrs(dom) {
        return getElementAttrs(dom);
      }
    }
  ]
};
