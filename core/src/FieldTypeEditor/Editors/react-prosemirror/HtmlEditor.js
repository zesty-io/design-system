import React, { useCallback, useMemo } from "react";
import debounce from "lodash/debounce";
import { DOMParser, DOMSerializer } from "prosemirror-model";

import Editor from "./Editor";

const parser = (schema) => {
  const parser = DOMParser.fromSchema(schema);

  return (content) => {
    const container = document.createElement("article");
    container.innerHTML = content;

    return parser.parse(container);
  };
};

const serializer = (schema) => {
  const serializer = DOMSerializer.fromSchema(schema);

  return (doc) => {
    const container = document.createElement("article");
    container.appendChild(serializer.serializeFragment(doc.content));

    return container.innerHTML;
  };
};

export function HtmlEditor({
  autoFocus,
  attributes,
  render,
  nodeViews,
  value,
  onChange,
  options,
}) {
  const { schema } = options;

  const { newOptions, serialize } = useMemo(() => {
    const parse = parser(schema);
    const serialize = serializer(schema);
    const newOptions = { ...options };
    newOptions.doc = parse(value);
    return { newOptions, serialize };
  }, [value, schema]);

  const onEditorChange = useCallback(
    debounce(
      (doc) => {
        onChange(serialize(doc));
      },
      1000,
      { maxWait: 5000 }
    ),
    [serialize]
  );

  return (
    <Editor
      autoFocus={autoFocus}
      options={newOptions}
      attributes={attributes}
      render={render}
      onChange={onEditorChange}
      nodeViews={nodeViews}
    />
  );
}
