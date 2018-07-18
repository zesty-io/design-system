"use strict";

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin({
  filename: `core.css`
});

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "core.var.js",
    library: "core",
    libraryTarget: "var"
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [extractLess],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[local]--[hash:base64:5]"
              }
            },
            {
              loader: "less-loader"
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
};

// 'use strict'

// const fs = require('fs')
// const path = require('path')
// const webpack = require('webpack')

// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// module.exports = {
//   // entry: () => {
//   //   return fs.readdirSync('src/').reduce((acc, dir) => {
//   //     acc[dir] = path.resolve(__dirname, `src/${dir}`)
//   //     return acc
//   //   }, {})
//   // },
//   entry: './src/index.js',
//   mode: 'development',
//   externals: {
//     // Don't bundle react or react-dom
//     react: {
//       commonjs: 'react',
//       commonjs2: 'react',
//       amd: 'React',
//       root: 'React'
//     },
//     'react-dom': {
//       commonjs: 'react-dom',
//       commonjs2: 'react-dom',
//       amd: 'ReactDOM',
//       root: 'ReactDOM'
//     }
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     // filename: `[name].js`,
//     // library: ['core', '[name]'],
//     filename: 'zesty-core.js',
//     library: 'core',
//     libraryTarget: 'umd'
//   },
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         styles: {
//           name: 'core',
//           test: /\.less$/,
//           chunks: 'all',
//           enforce: true
//         }
//       }
//     }
//   },
//   resolve: {
//     // modules: ['node_modules', 'src'],
//     extensions: ['.js']
//   },
//   plugins: [
//     new CopyWebpackPlugin([
//       {
//         from: 'src/**/*.less',
//         flatten: true
//       }
//     ]),
//     new MiniCssExtractPlugin({
//       filename: '[name].css'
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.less$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
//       },
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015', 'stage-2']
//         }
//       }
//     ]
//   }
// }
