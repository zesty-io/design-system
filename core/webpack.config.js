'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: () => {
    return fs.readdirSync('src/').reduce((acc, dir) => {
      acc[dir] = path.resolve(__dirname, `src/${dir}`)
      return acc
    }, {})
  },
  mode: 'development',
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].js`,
    library: ['core', '[name]'],
    libraryTarget: 'umd'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'core',
          test: /\.less$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  resolve: {
    // modules: ['node_modules', 'src'],
    extensions: ['.js']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/**/*.less',
        flatten: true
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
}
