import { marks } from "prosemirror-schema-basic";

const subscript = {
  excludes: "superscript",
  parseDOM: [{ tag: "sub" }, { style: "vertical-align=sub" }],
  toDOM: () => ["sub"]
};

const superscript = {
  excludes: "subscript",
  parseDOM: [{ tag: "sup" }, { style: "vertical-align=super" }],
  toDOM: () => ["sup"]
};

const strikethrough = {
  parseDOM: [
    { tag: "strike" },
    { style: "text-decoration=line-through" },
    { style: "text-decoration-line=line-through" }
  ],
  toDOM: () => [
    "del",
    {
      style: "text-decoration-line:line-through"
    }
  ]
};

const underline = {
  parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
  toDOM: () => [
    "span",
    {
      style: "text-decoration:underline"
    }
  ]
};

const indent = {
  parseDOM: [
    {
      style: "padding-left=30px"
    }
  ],
  toDOM: () => [
    "span",
    {
      style: "padding-left:30px"
    }
  ]
};

const alignLeft = {
  parseDOM: [{ style: "text-align=left" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;text-align:left"
    }
  ]
};

const alignRight = {
  parseDOM: [{ style: "text-align=right" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;text-align:right"
    }
  ]
};

const alignCenter = {
  parseDOM: [{ style: "text-align=center" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;text-align:center"
    }
  ]
};

const alignJustify = {
  parseDOM: [{ style: "text-align=justify" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;text-align:justify"
    }
  ]
};

const floatLeft = {
  parseDOM: [{ style: "float=left" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;float:left"
    }
  ]
};

const floatRight = {
  parseDOM: [{ style: "float=right" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;float:right"
    }
  ]
};

export default {
  ...marks,
  subscript,
  superscript,
  strikethrough,
  underline,
  indent,
  alignLeft,
  alignRight,
  alignCenter,
  alignJustify,
  floatLeft,
  floatRight
};
