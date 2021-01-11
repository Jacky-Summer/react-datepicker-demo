const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    publicPath: '/',
    compress: true,
    port: 8080,
  },
}

module.exports = merge(commonConfig, devConfig)
