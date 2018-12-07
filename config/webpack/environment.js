const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const { VueLoaderPlugin } = require('vue-loader')
const vue =  require('./loaders/vue')
const pug =  require('./loaders/pug')
const sass =  require('./loaders/sass')

environment.plugins.append('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.append('vue', vue)
environment.loaders.append('pug', pug)
environment.loaders.append('sass', sass)
environment.loaders.append('typescript', typescript)

const WebpackAssetsManifest = require('webpack-assets-manifest');

const splitChunks = {
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
};

environment.config.merge(splitChunks);

// Should override the existing manifest plugin
environment.plugins.insert(
  'Manifest',
  new WebpackAssetsManifest({
    entrypoints: true, // default in rails is false
    writeToDisk: true, // rails defaults copied from webpacker
    publicPath: true // rails defaults copied from webpacker
  })
)

module.exports = environment
