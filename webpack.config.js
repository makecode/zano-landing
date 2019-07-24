const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const js = require('./webpack/js');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATH = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
};

const common = merge([
  {
    entry: {
      'index': PATH.source + '/index.js',
      'roadmap': PATH.source + '/roadmap.js',
      'downloads': PATH.source + '/downloads.js',
      'team': PATH.source + '/team.js',
      'terms-of-use': PATH.source + '/terms-of-use.js',
      'privacy-policy': PATH.source + '/privacy-policy.js',
      'cookie-policy': PATH.source + '/cookie-policy.js',
      'marketplace': PATH.source + '/marketplace.js'
    },

    output: {
      path: PATH.build,
      filename: 'js/[name].js'
    },

    resolve: {
      alias: {
        media: path.resolve(__dirname, 'source/media'),
      }
    },

    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/index.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'roadmap.html',
        chunks: ['roadmap', 'common'],
        template: PATH.source + '/pages/roadmap.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'downloads.html',
        chunks: ['downloads', 'common'],
        template: PATH.source + '/pages/downloads.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'team.html',
        chunks: ['team', 'common'],
        template: PATH.source + '/pages/team.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'terms-of-use.html',
        chunks: ['terms-of-use', 'common'],
        template: PATH.source + '/pages/terms-of-use.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'privacy-policy.html',
        chunks: ['privacy-policy', 'common'],
        template: PATH.source + '/pages/privacy-policy.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'cookie-policy.html',
        chunks: ['cookie-policy', 'common'],
        template: PATH.source + '/pages/cookie-policy.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'marketplace.html',
        chunks: ['marketplace', 'common'],
        template: PATH.source + '/pages/marketplace.pug'
      }),
      // new CopyWebpackPlugin([{
      // from: './locales/**/*',
      // to: './js/'
      // }]),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      }),
      // new webpack.ProvidePlugin({
      //   $: 'jquery',
      //   jQuery: 'jquery'
      // })
    ]
  },
  js(),
  pug(),
  images(),
  fonts()
]);

module.exports = function (env) {
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass(),
      css()
    ]);
  }
  if (env === 'production') {
    return merge([
      common,
      extractCSS(),
      uglifyJS()
    ]);
  }
};
