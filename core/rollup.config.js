import fs from "fs";
import resolve from "rollup-plugin-node-resolve";
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
    postcss({
      // plugins: [
      //   modules({
      //     generateScopedName: '[local]__[hash:base64:5]',
      //     // getJSON (id, exportTokens) {
      //     //   cssExportMap[id] = exportTokens;
      //     // }
      //   })
      // ],
      // getExportNamed: false,
      // getExport (id) {
      //   return cssExportMap[id];
      // },
      modules: true,
      extract: "dist/bundle.css"
    }),
    babel({
      exclude: "node_modules/**", // only transpile our source code
      // babelrc: false,
      runtimeHelpers: true,
      plugins: ["transform-runtime"]
      // externalHelpers: true,
      // "presets": [
      //   ["env", {
      //     "modules": false
      //   }],
      //   "react",
      //   "stage-2"
      // ]
    }),
    cjs(),
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
