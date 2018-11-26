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
    { style: "text-decoration:line-through" },
    { style: "text-decoration-line:line-through" }
  ],
  toDOM: () => [
    "span",
    {
      style: "text-decoration-line:line-through"
    }
  ]
};

const underline = {
  parseDOM: [{ tag: "u" }, { style: "text-decoration:underline" }],
  toDOM: () => [
    "span",
    {
      style: "text-decoration:underline"
    }
  ]
};

const indent = {
  parseDOM: [
    { tag: "span" },
    {
      style: "padding-left: 30px"
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
  parseDOM: [{ tag: "span" }, { style: "text-align:left" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;text-align:left"
    }
  ]
};

const alignRight = {
  parseDOM: [{ tag: "span" }, { style: "text-align:right" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;text-align:right"
    }
  ]
};

const alignCenter = {
  parseDOM: [{ tag: "span" }, { style: "text-align:center" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;text-align:center"
    }
  ]
};

const alignJustify = {
  parseDOM: [{ tag: "span" }, { style: "text-align:justify" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;text-align:justify"
    }
  ]
};

const floatLeft = {
  parseDOM: [{ tag: "span" }, { style: "float:left" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;float:left"
    }
  ]
};

const floatRight = {
  parseDOM: [{ tag: "span" }, { style: "float:right" }],
  toDOM: () => [
    "span",
    {
      style: "display:block;float:right"
    }
  ]
};

// const dedent = {
//   parseDOM: [{ tag: "p" }, { style: "padding-left:0px" }],
//   toDOM: () => [
//     "span",
//     {
//       style: "padding-left:0px"
//     }
//   ]
// };

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
  // dedent
};
