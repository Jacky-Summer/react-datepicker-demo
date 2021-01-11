const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const { ANALYZE } = process.env

const plugins = []

if (ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin())
}

const devConfig = {
  mode: 'production',
  plugins,
  // externals: [nodeExternals()], // it looks like reduce, but `yarn build` and `yarn start` will fail
}

module.exports = merge(commonConfig, devConfig)
