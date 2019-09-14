const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: path.resolve('./src/lib/app.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('./public'),
  },
  mode: process.env.MODE || 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [new MinifyPlugin()],
};
