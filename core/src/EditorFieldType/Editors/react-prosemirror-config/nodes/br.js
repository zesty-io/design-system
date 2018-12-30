import { getElementAttrs, GLOBAL_ATTRS } from "./index.js";

// :: NodeSpec A hard line break, represented in the DOM as `<br>`.
export const br = {
  inline: true,
  group: "inline",
  selectable: false,
  attrs: GLOBAL_ATTRS,
  parseDOM: [
    {
      tag: "br",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["br", node.attrs];
  }
};
