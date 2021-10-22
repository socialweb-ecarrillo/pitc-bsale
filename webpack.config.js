const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const port = process.env.PORT || 3000;

require('dotenv').config({
  path: './.env'
});

const config = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png)$/,
        use: 'url-loader'
      },
      {
        test: /\.(gif|svg)$/i, 
        loader: 'file-loader',
        options: {
          name: '/src/img/[name].[ext]'
        }
      },
      {
        test: /\.(s?css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public/index.html' }],
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ],
  devServer: {
    'static': {
      directory: './dist'
    },
    port: port,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [
      '.jsx',
      '.js'
    ]
  }
};

module.exports = config;