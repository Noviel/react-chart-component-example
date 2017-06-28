const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { dist, root } = require('./config');

module.exports = {
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: dist,
    publicPath: '/dist/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([dist], { root }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
