'use strict'

const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: common.entry,
  output: common.output,

  plugins: [
    new ExtractTextPlugin({
      filename: '[name]-[hash].css'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new HtmlPlugin(common.htmlPluginConfig('template-dev.html')),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      Object.assign({}, common.cssLoader, {
        use: ExtractTextPlugin.extract({ // removemos o apply
          fallback: common.cssLoader.use[0],
          use: common.cssLoader.use.slice(1)
        })
      })
    ]
  },

  resolve: common.resolve
}
