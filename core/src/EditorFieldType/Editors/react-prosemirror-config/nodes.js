import { nodes } from "prosemirror-schema-basic";
import { orderedList, bulletList, listItem } from "prosemirror-schema-list";
import { tableNodes } from "prosemirror-tables";
import { footnoteNodes } from "@aeaton/prosemirror-footnotes";

const listNodes = {
  ordered_list: {
    ...orderedList,
    content: "list_item+",
    group: "block"
  },
  bullet_list: {
    ...bulletList,
    content: "list_item+",
    group: "block"
  },
  list_item: {
    ...listItem,
    content: "paragraph block*",
    group: "block"
  }
};

// :: NodeSpec An inline image (`<img>`) node. Supports `src`,
// `alt`, and `href` attributes. The latter two default to the empty
// string.
const images = {
  resizableImage: {
    inline: true,
    attrs: {
      src: {},
      alt: { default: null },
      title: { default: null },
      align: { default: null },
      width: { default: "10em" },
      height: { default: null }
    },
    group: "inline",
    draggable: true,
    marks: "floatLeft floatRight",
    parseDOM: [
      {
        priority: 51, // must be higher than the default image spec
        tag: "img[src]",
        getAttrs(dom) {
          return {
            src: dom.getAttribute("src"),
            title: dom.getAttribute("title"),
            alt: dom.getAttribute("alt"),
            align: dom.getAttribute("align"),
            width: dom.getAttribute("width"),
            height: dom.getAttribute("height")
          };
        }
      }
    ],
    toDOM(node) {
      const attrs = { style: `width: ${node.attrs.width}` };
      return ["span", { ...node.attrs, ...attrs }];
    }
  }
};

export default {
  ...nodes,
  ...listNodes,
  ...tableNodes({
    tableGroup: "block",
    cellContent: "block+"
  }),
  ...footnoteNodes,
  ...images // Custom image schema
};
