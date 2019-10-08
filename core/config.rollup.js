import cjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import copy from "rollup-plugin-copy-glob";
import postcss from "rollup-plugin-postcss";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { plugin as analyze } from "rollup-plugin-analyzer";

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
      showdown: "showdown"
    }
  },
  external: [
    "react",
    "react-dom",
    "react-router-dom",
    "@babel/runtime/helpers/extends",
    "@babel/runtime/helpers/classCallCheck",
    "@babel/runtime/helpers/createClass",
    "@babel/runtime/helpers/possibleConstructorReturn",
    "@babel/runtime/helpers/inherits",
    "@babel/runtime/helpers/toConsumableArray",
    "@babel/runtime/helpers/getPrototypeOf",
    "@babel/runtime/helpers/assertThisInitialized",
    "@babel/runtime/helpers/assertThisInitialized",
    "@babel/runtime/helpers/slicedToArray",
    "@babel/runtime/helpers/defineProperty",
    "babel-runtime/core-js/object/keys",
    "classnames"
  ],
  plugins: [
    analyze({ limit: 5 }),
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
