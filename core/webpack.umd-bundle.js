'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractLess = new ExtractTextPlugin({
  filename: `core.css`
})

module.exports = {
  entry: './src/index.js',
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
    },
    'react-router-dom': {
      commonjs: 'react-router-dom',
      commonjs2: 'react-router-dom',
      amd: 'ReactRouterDOM',
      root: 'ReactRouterDOM'
    },
    quill: {
      commonjs: 'quill',
      commonjs2: 'quill',
      amd: 'Quill',
      root: 'Quill'
    },
    'react-ace': {
      commonjs: 'react-ace',
      commonjs2: 'react-ace',
      amd: 'ReactAce',
      root: 'ReactAce'
    },
    'react-datepicker': {
      commonjs: 'react-datepicker',
      commonjs2: 'react-datepicker',
      amd: 'ReactDatepicker',
      root: 'ReactDatepicker'
    },
    'react-draft-wysiwyg': {
      commonjs: 'react-draft-wysiwyg',
      commonjs2: 'react-draft-wysiwyg',
      amd: 'ReactDraftWYSIWYG',
      root: 'ReactDraftWYSIWYG'
    },
    'react-draft-wysiwyg/dist/react-draft-wysiwyg.css': {
      commonjs: 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css',
      commonjs2: 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css',
      amd: 'ReactDraftWYSIWYGcss',
      root: 'ReactDraftWYSIWYGcss'
    },
    'react-datepicker/dist/react-datepicker-cssmodules.css': {
      commonjs: 'react-datepicker/dist/react-datepicker-cssmodules.css',
      commonjs2: 'react-datepicker/dist/react-datepicker-cssmodules.css',
      amd: 'ReactDDatepickercss',
      root: 'ReactDDatepickercss'
    },
    'react-quill/dist/quill.snow.css': {
      commonjs: 'react-quill/dist/quill.snow.css',
      commonjs2: 'react-quill/dist/quill.snow.css',
      amd: 'ReactQuillcss',
      root: 'ReactQuillcss'
    },
    'react-quill': {
      commonjs: 'react-quill',
      commonjs2: 'react-quill',
      amd: 'ReactQuill',
      root: 'ReactQuill'
    },
    'draft-js': {
      commonjs: 'draft-js',
      commonjs2: 'draft-js',
      amd: 'DraftJS',
      root: 'DraftJS'
    },
    moment: {
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'Moment',
      root: 'Moment'
    },
    '@tinymce/tinymce-react': {
      commonjs: '@tinymce/tinymce-react',
      commonjs2: '@tinymce/tinymce-react',
      amd: '@TinyMCE/TinyMCEReact',
      root: '@TinyMCE/TinyMCEReact'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'core.umd.js',
    library: 'core',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [extractLess],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLess.extract({
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
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
}

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
