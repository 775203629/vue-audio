const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/entry.js',
  output: {
    path: 'dist',
    filename: 'build.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules|vue\/dist/,
      loader: 'babel!eslint'
    }]
  },
  devServer: {
    contentBase: './example',
    port: 12345,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Vue-audio demo',
      filename: './example/index.html',
      cache: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map'
}
