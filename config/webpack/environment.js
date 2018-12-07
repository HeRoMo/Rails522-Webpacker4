const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const { VueLoaderPlugin } = require('vue-loader')
const vue =  require('./loaders/vue')
const pug =  require('./loaders/pug')

environment.plugins.append('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.append('vue', vue)
environment.loaders.append('pug', pug)
environment.loaders.append('typescript', typescript)
module.exports = environment
