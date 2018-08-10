import fs from "fs";
import cjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import copy from "rollup-plugin-copy-glob";
import postcss from "rollup-plugin-postcss";
import modules from "postcss-modules";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

try {
  fs.mkdirSync("dist/");
} catch (err) {
  console.log(err);
}

export default {
  input: "src/index.js",
  output: {
    file: "dist/umd.bundle.js",
    format: "umd",
    name: "zesty",
    globals: {
      classnames: "cx",
      react: "react",
      "react-dom": "reactDom",
      "react-router-dom": "reactRouterDom",
      "react-quill": "reactQuill",
      "react-ace": "reactAce",
      "react-datepicker": "DatePicker",
      "react-draft-wysiwyg": "reactDraftWysiwyg",
      "draft-js": "draftJs",
      "@tinymce/tinymce-react": "tinymceReact",
      moment: "moment"
    }
  },
  external: [
    "react",
    "react-dom",
    "react-router-dom",
    "react-quill",
    "react-ace",
    "react-datepicker",
    "react-draft-wysiwyg",
    "babel-runtime/helpers/extends",
    "babel-runtime/core-js/object/get-prototype-of",
    "babel-runtime/helpers/classCallCheck",
    "babel-runtime/helpers/createClass",
    "babel-runtime/helpers/possibleConstructorReturn",
    "babel-runtime/helpers/inherits",
    "babel-runtime/core-js/object/keys",
    "babel-runtime/helpers/toConsumableArray",
    "classnames",
    "draft-js",
    "@tinymce/tinymce-react",
    "moment"
  ],
  plugins: [
    postcss({
      extract: "dist/bundle.css"
    }),
    babel({
      exclude: "node_modules/**", // only transpile our source code
      runtimeHelpers: true
      // plugins: ["transform-runtime"]
    }),
    cjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react/index.js": [
          "Component",
          "PureComponent",
          "Fragment",
          "Children",
          "createElement"
        ]
      }
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      )
    }),
    copy([
      {
        files: "src/**/*.less",
        dest: "dist/"
      }
    ]),
    sizeSnapshot()
  ]
};
