'use strict'

const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin({
  filename: 'bundle.css'
})

module.exports = {
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 8080
  },
  entry: './index.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [extractCSS],
  resolve: {
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.less$/,
        use: extractCSS.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              // "@babel/plugin-proposal-object-rest-spread",
              // "@babel/plugin-syntax-dynamic-import",
              // "@babel/plugin-syntax-import-meta",
              ['@babel/plugin-proposal-class-properties', { loose: false }]
              // "@babel/plugin-proposal-json-strings"
            ]
          }
        }
      }
    ]
  }
}
