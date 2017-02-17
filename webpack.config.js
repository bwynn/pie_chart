const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './app/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'app'),
      'node_modules',
      './app/components',
    ],
    alias: {
      ApplicationStyles: path.resolve(__dirname, './app/styles/app.scss'),
    },
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015'],
            },
          },
        ],
        test: /\.jsx?$/,
        exclude: [/node_modules/],
      },
    ],
  },
};
