import tableNodes from "./table.js";
import * as listNodes from "./lists.js";
import { heading } from "./heading.js";
import { iframe } from "./iframe.js";
import { image } from "./image.js";
import { paragraph } from "./paragraph.js";
import { script } from "./script.js";
import { blockquote } from "./blockquote.js";
import { code_block } from "./code.js";
import { hr } from "./hr.js";
import { br } from "./br.js";

export const GLOBAL_ATTRS = {
  accesskey: { default: null },
  autocapitalize: { default: null },
  class: { default: null },

  // We exclude `contenteditable`. This may cause problems with prosemirror?
  contextmenu: { default: null },

  // `data-*` have to be added on a per case basis
  dir: { default: null },
  draggable: { default: null },
  dropzone: { default: null },
  hidden: { default: null },
  id: { default: null },
  inputmode: { default: null },

  // Experimental microdata
  // @see https://html.spec.whatwg.org/multipage/microdata.html#microdata
  itemid: { default: null },
  itemprop: { default: null },
  itemref: { default: null },
  itemscope: { default: null },
  itemtype: { default: null },

  lang: { default: null },
  spellcheck: { default: null },
  style: { default: null },
  tabindex: { default: null },
  title: { default: null },
  translated: { default: null }
};

/**
 * getElementAttrs
 * attrs [NodeList]
 */
export function getElementAttrs(attrs) {
  let newAttrs = {};

  if (attrs.length) {
    for (var i = 0; i < attrs.length; i++) {
      if (attrs[i].value) {
        newAttrs[attrs[i].name] = attrs[i].value;
      }
    }
  }

  return newAttrs;
}

export default {
  // :: NodeSpec The top level document node.
  doc: {
    content: "block+"
  },

  // :: NodeSpec The text node.
  text: {
    group: "inline"
  },

  // override ProseMirror basic schema
  paragraph,
  blockquote,
  image,
  heading,
  code_block,
  hr,
  br,

  // override ProseMirror table schema
  ...tableNodes,

  // override ProseMirror list schema
  ...listNodes,

  // additional html nodes
  script,
  iframe
};
