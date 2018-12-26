import { nodes } from "prosemirror-schema-basic";
import { orderedList, bulletList, listItem } from "prosemirror-schema-list";
import { tableNodes } from "prosemirror-tables";
import { footnoteNodes } from "@aeaton/prosemirror-footnotes";

// Takes a NodeList
function getElementAttrs(attrs) {
  let newAttrs = {};

  if (attrs.length) {
    for (var i = 0; i < attrs.length; i++) {
      newAttrs[attrs[i].name] = attrs[i].value;
    }
  }

  return newAttrs;
}

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

const images = {
  resizableImage: {
    inline: true,
    attrs: {
      src: {},
      alt: { default: null },
      title: { default: null },
      align: { default: null },
      width: { default: null },
      height: { default: null },
      "data-zuid": { default: null }
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
      // Markup returned from an onChange event. i.e. the markup we store to the API
      return ["img", node.attrs];
    }
  }
};

const script = {
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
const iframe = {
  group: "inline", // Allow this node to be child of paragraph
  inline: true,
  attrs: {
    src: { default: null },
    id: { default: null },
    class: { default: null },
    style: { default: null },
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

export default {
  ...nodes,
  ...listNodes,
  ...tableNodes({
    tableGroup: "block",
    cellContent: "block+"
  }),
  ...footnoteNodes,
  ...images, // Custom image schema
  script,
  iframe
};
