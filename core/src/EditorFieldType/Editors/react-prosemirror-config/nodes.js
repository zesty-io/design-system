import { nodes } from "prosemirror-schema-basic";
import { orderedList, bulletList, listItem } from "prosemirror-schema-list";
import { tableNodes } from "prosemirror-tables";
import { footnoteNodes } from "@aeaton/prosemirror-footnotes";

/**
 * getElementAttrs
 * attrs [NodeList]
 */
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
      style: { default: null },
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
          return getElementAttrs(dom.attributes);
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

// :: NodeSpec A plain paragraph textblock. Represented in the DOM
// as a `<p>` element.
const paragraph = {
  content: "inline*",
  group: "block",
  attrs: {
    id: { default: null },
    class: { default: null },
    style: { default: null }
  },
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

// :: NodeSpec A heading textblock, with a `level` attribute that
// should hold the number 1 to 6. Parsed and serialized as `<h1>` to
// `<h6>` elements.
const heading = {
  attrs: {
    level: { default: 1 },
    id: { default: null },
    class: { default: null },
    style: { default: null }
  },
  content: "inline*",
  group: "block",
  defining: true,
  parseDOM: [
    {
      tag: "h1",
      getAttrs(dom) {
        const attrs = getElementAttrs(dom.attributes);
        return { ...attrs, level: 1 };
      }
    },
    {
      tag: "h2",
      getAttrs(dom) {
        const attrs = getElementAttrs(dom.attributes);

        console.log("heading2:parseDOM", attrs);

        return { ...attrs, level: 2 };
      }
    },
    {
      tag: "h3",
      getAttrs(dom) {
        const attrs = getElementAttrs(dom.attributes);
        return { ...attrs, level: 3 };
      }
    },
    {
      tag: "h4",
      getAttrs(dom) {
        const attrs = getElementAttrs(dom.attributes);
        return { ...attrs, level: 4 };
      }
    },
    {
      tag: "h5",
      getAttrs(dom) {
        const attrs = getElementAttrs(dom.attributes);
        return { ...attrs, level: 5 };
      }
    },
    {
      tag: "h6",
      getAttrs(dom) {
        const attrs = getElementAttrs(dom.attributes);
        return { ...attrs, level: 6 };
      }
    }
  ],
  toDOM(node) {
    return ["h" + node.attrs.level, { ...node.attrs, level: null }, 0];
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

  // Custom nodes
  script,
  iframe,

  //override defaults
  ...images,
  heading,
  paragraph
};
