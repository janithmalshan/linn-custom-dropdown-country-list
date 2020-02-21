const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: './src/main.ts',

  output: {
    filename: './bundle.js'
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ],
    rules: [
      {
        test: /\.tsx?/,
        exclude: [/node_modules/, /\.(spec|e2e)\.ts$/],
        include: path.resolve(__dirname, 'src'),
        loader: ['ts-loader']
      }
    ]
  }
};
