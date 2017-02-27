var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var JavascriptObfuscator = require('webpack-obfuscator');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpackUglifyJsPlugin({
      cacheFolder: path.resolve(__dirname, '../public/cached_uglify/'),
      debug: false,
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    }),
    new JavascriptObfuscator({
      rotateUnicodeArray: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.template.html',
      inject: 'body'
    })
  ]
};