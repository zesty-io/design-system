import fs from "fs";
import resolve from "rollup-plugin-node-resolve";
import cjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import less from "rollup-plugin-less";

fs.mkdirSync("dist/");

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name: "zesty",
    globals: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-quill",
      "react-ace",
      "react-datepicker",
      "react-draft-wysiwyg",
      "draft-js",
      "@tinymce/tinymc-react",
      "moment"
    ]
  },
  plugins: [
    resolve(),
    less({
      output: "dist/bundle.css",
      include: ["**/*.less", "**/*.css"]
    }),
    babel({
      exclude: "node_modules/**" // only transpile our source code
    }),
    cjs(),
    replace({
      "process.env.NODE_ENV":
        process.env.NODE_ENV || JSON.stringify("production")
    })
  ]
};
