import { getElementAttrs, GLOBAL_ATTRS } from "./index.js";

// :: NodeSpec A code listing. Disallows marks or non-text inline
// nodes by default. Represented as a `<pre>` element with a
// `<code>` element inside of it.
export const code_block = {
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  attrs: GLOBAL_ATTRS,
  parseDOM: [
    {
      tag: "pre",
      preserveWhitespace: "full",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["pre", node.attrs, ["code", 0]];
  }
};
