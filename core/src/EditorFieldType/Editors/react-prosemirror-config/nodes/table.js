import { getElementAttrs, GLOBAL_ATTRS } from "./index.js";

/**
  Override `prosemirror-tables` node definitions to provide custom
  attributes. Requires providing the `tableRole` property for
  the plugins to work.
  @see https://github.com/prosemirror/prosemirror-tables/
**/
export const table = {
  content: "(colgroup | caption | table_body)+",
  tableRole: "table",
  isolating: true,
  group: "block",
  attrs: { ...GLOBAL_ATTRS },
  parseDOM: [
    {
      tag: "table",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["table", node.attrs, 0];
  }
};

export const table_body = {
  content: "table_row+",
  tableRole: "table_body",
  // isolating: true,
  group: "block",
  attrs: { ...GLOBAL_ATTRS },
  parseDOM: [
    {
      tag: "tbody",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["tbody", node.attrs, 0];
  }
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 */
export const caption = {
  content: "inline*",
  parseDOM: [
    {
      tag: "caption",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["caption", node.attrs, 0];
  }
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 */
export const table_row = {
  content: "(table_cell | table_header)*",
  tableRole: "row",
  attrs: { ...GLOBAL_ATTRS },
  parseDOM: [
    {
      tag: "tr",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["tr", node.attrs, 0];
  }
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
 */
export const table_cell = {
  content: "block+",
  tableRole: "cell",
  attrs: {
    ...GLOBAL_ATTRS,
    colspan: { default: null },
    rowspan: { default: null },
    headers: { default: null }
  },
  isolating: true,
  parseDOM: [
    {
      tag: "td",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["td", node.attrs, 0];
  }
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
 */
export const table_header = {
  content: "block+",
  tableRole: "header_cell",
  attrs: {
    ...GLOBAL_ATTRS,
    abbr: { default: null },
    colspan: { default: null },
    rowspan: { default: null },
    scope: { default: null }
  },
  isolating: true,
  parseDOM: [
    {
      tag: "th",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],

  toDOM(node) {
    return ["th", node.attrs, 0];
  }
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
 */
export const colgroup = {
  content: "col+",
  attrs: {
    ...GLOBAL_ATTRS,
    span: { default: null }
  },
  parseDOM: [
    {
      tag: "colgroup",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["colgroup", { ...node.attrs }, 0];
  }
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
 */
export const col = {
  attrs: {
    ...GLOBAL_ATTRS,
    span: { default: null },
    width: { default: null }
  },
  parseDOM: [
    {
      tag: "col",
      getAttrs(dom) {
        return getElementAttrs(dom.attributes);
      }
    }
  ],
  toDOM(node) {
    return ["col", { ...node.attrs }];
  }
};

export default {
  table,
  table_body,
  table_row,
  table_cell,
  table_header,
  caption,
  colgroup,
  col
};
